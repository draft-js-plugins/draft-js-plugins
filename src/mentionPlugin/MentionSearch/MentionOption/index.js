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

  onMouseEnter = () => {
    this.props.onMentionFocus(this.props.index);
  };

  render() {
    const style = this.props.isFocused ? styles.focus : styles.root;
    return (
      <div
        style={ style }
        onClick={ this.onMentionSelect }
        onMouseEnter={ this.onMouseEnter }
      >
        { this.props.mention.get('handle') }
      </div>
    );
  }
}
