import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createLinkPlugin from '@draft-js-plugins/anchor';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from '@draft-js-plugins/buttons';
import editorStyles from './editorStyles.module.css';
import buttonStyles from './buttonStyles.module.css';
import toolbarStyles from './toolbarStyles.module.css';
import linkStyles from './linkStyles.module.css';

const linkPlugin = createLinkPlugin({
  theme: linkStyles,
  placeholder: 'http://…',
});
const inlineToolbarPlugin = createInlineToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];
const text =
  'Try selecting a part of this text and click on the link button in the toolbar that appears …';

export default class ThemedInlineToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => this.setState({ editorState });

  focus = () => this.editor.focus();

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element;
          }}
        />
        <InlineToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <div>
                <BoldButton {...externalProps} />
                <ItalicButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <linkPlugin.LinkButton {...externalProps} />
              </div>
            )
          }
        </InlineToolbar>
      </div>
    );
  }
}
