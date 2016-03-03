import {
  CompositeDecorator,
  Modifier,
  Editor,
  EditorState,
  Entity,
} from 'draft-js';
import getRangeBoundingClientRect from 'draft-js/lib/getRangeBoundingClientRect';
import React, { PropTypes } from 'react';
import _ from 'lodash'; // TODO remove dep

import Dropdown from './Dropdown';

const styles = {
  root: {
    fontFamily: '\'Georgia\', serif',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 100,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  mention: {
    color: '#3b5998',
    cursor: 'pointer',
    display: 'inline',
    textDecoration: 'underline',
  },
};

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

const mentions = [
  { handle: 'mjrussell', link: 'https://twitter.com/mrussell247' },
  { handle: 'nikgraf', link: 'https://twitter.com/nikgraf' },
  { handle: 'dan_abramov', link: 'https://twitter.com/dan_abramov' },
];

const Mention = props => {
  const { mention } = Entity.get(props.entityKey).getData();
  return (
    <a href={mention.link} style={styles.mention}>{`@${mention.handle}`}</a>
  );
};

function findMentionEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'MENTION'
      );
    },
    callback
  );
}

export default class MentionEditorExample extends React.Component {
  constructor(props) {
    super(props);

    const mentionDecorator = new CompositeDecorator([
      {
        strategy: findMentionEntities,
        component: Mention,
      },
    ]);

    this.state = {
      editorState: EditorState.createEmpty(mentionDecorator),
      mentionSearch: null,
    };
  }

  componentDidUpdate() {
    const { editorState } = this.state;
    const content = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const currentBlock = content.getBlockForKey(selection.getAnchorKey());
    if (selection.isCollapsed()) {
      const blockText = currentBlock.getText();
      const { word, begin, end } = getWordAt(blockText, selection.getAnchorOffset());
      const mentionRegex = /\@([\w]*)/;
      const matches = word.match(mentionRegex);
      const existingEntity = currentBlock.getEntityAt(begin);
      // Show popout only if theres a match for a mention and no existing entity
      if (!existingEntity && matches) {
        const mentionSearch = matches[1];
        if (this.state.mentionSearch !== mentionSearch) {
          const range = global.getSelection().getRangeAt(0);
          const boundingRect = getRangeBoundingClientRect(range); // TODO use getViewportSelectionRect instead
          this.setState({ // eslint-disable-line react/no-did-update-set-state
            mentionSearch: matches[1],
            mentionSearchBegin: begin,
            mentionSearchEnd: end,
            rect: boundingRect,
          });
        }
      } else {
        if (this.state.mentionSearch !== null) {
          this.setState({ // eslint-disable-line react/no-did-update-set-state
            mentionSearch: null,
            mentionSearchBegin: null,
            mentionSearchEnd: null,
            rect: null,
          });
        }
      }
    }
  }

  onChange = editorState => this.setState({ editorState });

  onMentionSelect = mention => e => {
    e.preventDefault();
    const { editorState, mentionSearchBegin, mentionSearchEnd } = this.state;
    const entityKey = Entity.create('MENTION', 'IMMUTABLE', { mention });
    const mentionTextSelection = editorState.getSelection().merge({
      anchorOffset: mentionSearchBegin,
      focusOffset: mentionSearchEnd,
    });

    const mentionReplaced = Modifier.replaceText(
      editorState.getCurrentContent(),
      mentionTextSelection,
      mention.handle,
      null, // no inline style neeeded
      entityKey
    );

    const newEditorState = EditorState.push(
      editorState,
      mentionReplaced,
      'apply-entity',
    );

    this.setState({
      editorState: newEditorState,
    }, () => {
      setTimeout(() => this.refs.editor.focus(), 0);
    });
  };

  // Get the first 5 mentions that match
  getMentionsForFilter = () => _.take(_.filter(mentions, m => _.startsWith(m.handle, this.state.mentionSearch)), 5);

  focus = () => this.refs.editor.focus();

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
    let dropdownStyle = {};
    if (this.state.rect) {
      dropdownStyle = {
        position: 'fixed',
        top: this.state.rect.top,
        left: this.state.rect.left,
        marginTop: '13px',
        width: '200px',
        textAlign: 'left',
      };
    }

    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Type something and then use the @ sign..."
            ref="editor"
          />
        </div>
      <Dropdown isOpen={this.state.mentionSearch !== null} style={dropdownStyle}>
          {this.getMentionsForFilter().map(this.renderItemForMention)}
        </Dropdown>
      </div>
    );
  }
}
