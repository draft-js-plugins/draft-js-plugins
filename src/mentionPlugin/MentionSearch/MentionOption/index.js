import React, {
  // PropTypes,
  Component,
} from 'react';
import styles from './styles';
import Avatar from './Avatar';

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
        <Avatar mention={ this.props.mention } />
        <span style={ styles.text }>{ this.props.mention.get('name') }</span>
      </div>
    );
  }
}
