import React from 'react';
import styles from '../alignmentToolStyles.css';
import buttonStyles from '../buttonStyles.css';

// TODO make toolbarHeight to be determined or a parameter
const toolbarHeight = 44;

export default class AlignmentTool extends React.Component {

  state = {
    position: {},
  }

  componentWillMount() {
    this.props.store.subscribeToItem('isVisible', this.onVisibilityChanged);
  }

  componentWillUnmount() {
    this.props.store.unsubscribeFromItem('isVisible', this.onVisibilityChanged);
  }

  onVisibilityChanged = (isVisible) => {
    const boundingRect = this.props.store.getItem('boundingRect');
    const position = isVisible ? {
      top: (boundingRect.top + window.scrollY) - toolbarHeight,
      left: boundingRect.left + window.scrollX + (boundingRect.width / 2),
      transform: 'translate(-50%) scale(1)',
      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
    } : {
      transform: 'translate(-50%) scale(0)',
    };
    this.setState({
      position,
    });
  }

  floatLeft = (evt) => {
    evt.preventDefault();
    this.props.store.getItem('setAlignmentData')({ alignment: 'left' });
  }

  alignDefault = (evt) => {
    evt.preventDefault();
    this.props.store.getItem('setAlignmentData')({ alignment: 'default' });
  }

  alignCenter = (evt) => {
    evt.preventDefault();
    this.props.store.getItem('setAlignmentData')({ alignment: 'center' });
  }

  floatRight = (evt) => {
    evt.preventDefault();
    this.props.store.getItem('setAlignmentData')({ alignment: 'right' });
  }

  render() {
    return (
      <div
        className={styles.alignmentTool}
        style={this.state.position}
      >
        <button
          className={buttonStyles.button}
          onClick={this.floatLeft}
          type="button"
        >
          Left
        </button>
        <button
          className={buttonStyles.button}
          onClick={this.alignDefault}
          type="button"
        >
          Default
        </button>
        <button
          className={buttonStyles.button}
          onClick={this.alignCenter}
          type="button"
        >
          Center
        </button>
        <button
          className={buttonStyles.button}
          onClick={this.floatRight}
          type="button"
        >
          Right
        </button>
      </div>
    );
  }
}
