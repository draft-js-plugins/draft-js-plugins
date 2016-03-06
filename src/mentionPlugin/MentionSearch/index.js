import React, { Component } from 'react';

import Dropdown from './Dropdown';
import MentionOption from './MentionOption';
import addMention from '../modifiers/addMention';
import styles from './styles';

export default (mentions) => {
  class MentionSearch extends Component {

    onMentionSelect = (mention) => {
      // TODO dynamic mention
      const newEditorState = addMention(this.props.editor.props.editorState, mention, this.lastSelection);
      this.props.editor.onChange(newEditorState);
    };

    // Get the first 5 mentions that match
    getMentionsForFilter = () => (
      mentions

      // TODO better search algorithm than startsWith
      // mentions.filter((mention) => mention.handle.startsWith(this.mentionSearch)).slice(0, 10)
    );

    renderItemForMention = (mention) => (

      <div key={ mention.handle }
        eventKey={ mention.handle }
        onClick={ this.onMentionSelect }
      >
        <span>{ mention.handle }</span>
      </div>
    );

    render() {
      // TODO ask issac to provide begin & end down to the component as prop (in decorators)
      this.lastSelection = this.props.editor.props.editorState.getSelection();

      // TODO what happens to positioning if the mention is @ the end in the text field. can it break out from the inner layout?
      return (
        <span {...this.props} style={ styles.root }>
          { this.props.children }
          <Dropdown>
            {
              this.getMentionsForFilter().map((mention) => (
                <MentionOption
                  onMentionSelect={ this.onMentionSelect }
                  mention={ mention }
                />
              ))
            }
          </Dropdown>
        </span>
      );
    }
  }

  return MentionSearch;
};
