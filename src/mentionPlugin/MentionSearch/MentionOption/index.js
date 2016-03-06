import React, {
  // PropTypes,
  Component,
} from 'react';
import styles from './styles';

export default class MentionOption extends Component {

  onMentionSelect = () => {
    this.props.onMentionSelect(this.props.mention);
  };

  render() {
    return (
      <div
        style={ styles.root }
        onClick={ this.onMentionSelect }
      >
        { this.props.mention.handle }
      </div>
    );
  }
}
