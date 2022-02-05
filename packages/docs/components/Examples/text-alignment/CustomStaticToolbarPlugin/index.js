import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createStaticToolbarPlugin from '@draft-js-plugins/static-toolbar';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from '@draft-js-plugins/buttons';
import editorStyles from './editorStyles.module.css';
import buttonStyles from './buttonStyles.module.css';
import alignmentStyles from './alignmentStyles.module.css';
import toolbarStyles from './toolbarStyles.module.css';

const textAlignmentPlugin = createTextAlignmentPlugin({
  theme: { alignmentStyles },
});

const staticToolbarPlugin = createStaticToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin, textAlignmentPlugin];
const text =
  'Try selecting a part of this text and click on one of alignment buttons';

export default class SimpleTextAlignmentPlugin extends Component {
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
        <Toolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <div>
                <ItalicButton {...externalProps} />
                <BoldButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <textAlignmentPlugin.TextAlignment {...externalProps} />
              </div>
            )
          }
        </Toolbar>
      </div>
    );
  }
}
