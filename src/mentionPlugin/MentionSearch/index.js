import React, { Component } from 'react';

// import styles from './styles';
import Dropdown from './Dropdown';
import getRangeBoundingClientRect from 'draft-js-cutting-edge/lib/getRangeBoundingClientRect';

import addMention from '../modifiers/addMention';
import getWordAt from '../getWordAt';

export default (editor, mentions) => {
  class MentionSearch extends Component {

    constructor(props) {
      super(props);

      const editorState = editor.state.editorState;
      const content = editorState.getCurrentContent();
      const selection = editorState.getSelection();
      const currentBlock = content.getBlockForKey(selection.getAnchorKey());
      const blockText = currentBlock.getText();
      const result = getWordAt(blockText, selection.getAnchorOffset());
      const begin = result.begin;
      const end = result.end;
      const text = this.props.children[0].props.text;
      if (text.startsWith('@')) {
        this.mentionSearch = text.substring(1);
      } else {
        this.mentionSearch = '';
      }

      this.mentionSearchBegin = begin;
      this.mentionSearchEnd = end;
      const range = global.getSelection().getRangeAt(0);
      this.rect = getRangeBoundingClientRect(range); // TODO use getViewportSelectionRect instead
    }

    onMentionSelect = mention => () => {
      editor.onChange(addMention(
        editor.state.editorState,
        mention,
        this.mentionSearchBegin,
        this.mentionSearchEnd
      ));
    };

    // Get the first 5 mentions that match
    getMentionsForFilter = () => mentions.filter(m => m.handle.startsWith(this.mentionSearch)).slice(0, 5);

    renderItemForMention = mention => (
      <div key={mention.handle}
        eventKey={mention.handle}
        className="mention-custom-dropdown-item"
        onClick={this.onMentionSelect(mention)}
      >
        <span className="bold">{`@${mention.handle} `}</span>
      </div>
    );

    render() {
      const dropdownStyle = {
        position: 'static',
        border: '1px solid black',
        top: this.rect.top,
        left: this.rect.left,
        marginTop: '11px',
        width: '200px',
        textAlign: 'left',
      };
      return (
        <div style={{ display: 'inline' }}>
          <span>{ this.props.children[0].props.text }</span>
            <Dropdown isOpen={this.mentionSearch !== null} style={dropdownStyle}>
                {this.getMentionsForFilter().map(this.renderItemForMention)}
            </Dropdown>
        </div>
      );
    }
  }

  return MentionSearch;
};
