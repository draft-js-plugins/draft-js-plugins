import React, { Component } from 'react';
import add from '../../modifiers/addSticker';
import styles from './styles';

export default class StickerOption extends Component {

  add = () => {
    const { editor, sticker } = this.props;
    editor.onChange(add(editor.state.editorState, sticker.get('id')));
  };

  render() {
    const { sticker } = this.props;
    return (
      <button
        onClick={ this.add }
        key={sticker.get('id')}
        type="button"
        style={ styles.root }
      >
        <img height="100" src={ sticker.get('url') } />
      </button>
    );
  }
}
