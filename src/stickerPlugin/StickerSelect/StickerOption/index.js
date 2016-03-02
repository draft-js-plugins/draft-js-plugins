import React, { Component } from 'react';
import add from '../../modifiers/addSticker';
import styles from './styles';

export default class StickerOption extends Component {

  state = {
    hover: false,
  };

  onMouseEnter = () => {
    this.setState({
      hover: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };

  add = () => {
    const { editor, sticker } = this.props;
    editor.onChange(add(editor.state.editorState, sticker.get('id')));
  };

  render() {
    const { sticker } = this.props;
    const rootStyle = {
      ...styles.root,
      background: (this.state.hover ? '#eee' : '#fff'),
    };
    return (
      <button
        onClick={ this.add }
        onMouseEnter={ this.onMouseEnter }
        onMouseLeave={ this.onMouseLeave }
        key={sticker.get('id')}
        type="button"
        style={ rootStyle }
      >
        <img style={ styles.image } src={ sticker.get('url') } />
      </button>
    );
  }
}
