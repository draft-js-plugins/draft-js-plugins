import React from 'react';
import { Entity, SelectionState } from 'draft-js';
import Portal from 'react-portal';
import styles from '../tooltipStyle.css';

const createTooltipedLink = (WrappedLinkComponent) => (
  class TooltipedLink extends React.Component {

    static displayName = `TooltipedLink(${WrappedLinkComponent.displayName || WrappedLinkComponent.name || 'Component'})`

    constructor(props) {
      super(props);
      const { url } = Entity.get(props.entityKey).getData();
      this.state = {
        overTooltip: false,
        overLink: false,
        url,
        position: {},
      };
    }

    onMouseEnter = (event) => {
      event.persist();
      if (this.state.overLink === false) {
        const position = this.getPosition(event.target);
        this.setState({
          ...position,
          overLink: true,
        });
      }
    }

    onMouseOut = () => {
      setTimeout(() => {
        if (this.state.overLink === true) {
          this.setState({ overLink: false });
        }
      }, 200);
    }
    onMouseEnterTooltip = () => {
      if (this.state.overTooltip === false) {
        this.setState({ overTooltip: true });
      }
    }

    onMouseOutTooltip = () => {
      if (this.state.overTooltip === true) {
        this.setState({ overTooltip: false });
      }
    }

    onTooltipClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const contentState = this.props.store.getItem('getEditorState')().getCurrentContent();
      const blockKey = this.props.offsetKey.split('-')[0];
      const contentBlock = contentState.getBlockForKey(blockKey);
      const selection = SelectionState.createEmpty();
      this.setState({
        overLink: false,
        overTooltip: false,
      });
      contentBlock.findEntityRanges(
        (value) => value.get('entity') === this.props.entityKey,
        (start, end) => {
          this.props.store.updateItem('linkSelection',
            selection.merge({
              anchorKey: blockKey,
              anchorOffset: start,
              focusKey: blockKey,
              focusOffset: end,
            })
          );
        }
      );
    }

    getUrl = () => {
      const { url } = Entity.get(this.props.entityKey).getData();
      return url;
    }

    getPosition = (target) => {
      const linkRect = target.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      return {
        positions: {
          top: (linkRect.bottom - bodyRect.top) + 20,
          left: linkRect.left - bodyRect.left - (linkRect.width / 2),
        },
      };
    }

    render = () => {
      const props = Object.assign({}, { ...this.props }, { href: this.getUrl() });
      return (
        <span>
          <span
            className={styles.link}
            onMouseEnter={this.onMouseEnter}
            onMouseOut={this.onMouseOut}
          >
            <WrappedLinkComponent {...props} />
          </span>
          <Portal
            isOpened={this.state.overLink || this.state.overTooltip}
            ref={(p) => { this.portal = p; }}
          >
            <div
              className={styles.tooltip}
              style={this.state.positions}
              onMouseEnter={() => { this.onMouseEnterTooltip(); }}
              onMouseOut={() => { this.onMouseOutTooltip(); }}
              onClick={(event) => { this.onTooltipClick(event); }}
            >
              {this.getUrl()}
            </div>
          </Portal>
        </span>
      );
    };
  }
);

export default createTooltipedLink;
