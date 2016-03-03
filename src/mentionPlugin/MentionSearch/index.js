import React, { Component } from 'react';

// import styles from './styles';
import Dropdown from './Dropdown';
import getRangeBoundingClientRect from 'draft-js/lib/getRangeBoundingClientRect'

import addMention from '../modifiers/addMention';

// TODO move to util
// TODO this is pretty hacky, maybe a better way?
/* eslint-disable */
function getWordAt(str, pos) {

    // Perform type conversions.
    str = String(str);
    pos = Number(pos) >>> 0;

    // Search for the word's beginning and end.
    var left = str.slice(0, pos + 1).search(/\S+$/),
        right = str.slice(pos).search(/\s/);

    // The last word in the string is a special case.
    if (right < 0) {
        return {
          word: str.slice(left),
          begin: left,
          end: str.length,
        };
    }

    // Return the word, using the located bounds to extract it from the string.
    return {
      word: str.slice(left, right + pos),
      begin: left,
      end: right + pos,
    };
}
/* eslint-enable */


export default (editor, mentions) => {
  return class MentionSearch extends Component {

    constructor(props) {
      super(props);

      const editorState = editor.state.editorState;
      const content = editorState.getCurrentContent();
      const selection = editorState.getSelection();
      const currentBlock = content.getBlockForKey(selection.getAnchorKey());
      const blockText = currentBlock.getText();
      const { word, begin, end } = getWordAt(blockText, selection.getAnchorOffset());
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
    getMentionsForFilter = () => mentions.filter(m => m.handle.startsWith(this.mentionSearch)).slice(0,5)

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
  };
};
