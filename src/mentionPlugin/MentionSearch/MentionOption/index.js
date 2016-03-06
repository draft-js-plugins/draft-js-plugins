import React, {
  // PropTypes,
  Component,
} from 'react';
import styles from './styles';

export default class MentionOption extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onMentionSelect = () => {
    this.props.onMentionSelect(this.props.mention);
  };

  onMouseOver = () => {
    this.setState({
      hovered: true,
    });
  };

  onMouseOut = () => {
    this.setState({
      hovered: false,
    });
  };

  render() {
    const style = this.state.hovered ? styles.hovered : styles.root;
    return (
      <div
        style={ style }
        onClick={ this.onMentionSelect }
        onMouseOver={ this.onMouseOver }
        onMouseOut={ this.onMouseOut }
      >
        { this.props.mention.get('handle') }
      </div>
    );
  }
}
