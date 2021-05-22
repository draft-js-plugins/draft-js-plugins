import React, { Component } from 'react';

import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons';

import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import editorStyles from './editorStyles.module.css';
import buttonStyles from './buttonStyles.module.css';
import toolbarStyles from './toolbarStyles.module.css';
import blockTypeSelectStyles from './blockTypeSelectStyles.module.css';

// Setting the side Toolbar at right position(default is left) and styling with custom theme
const sideToolbarPlugin = createSideToolbarPlugin({
  position: 'right',
  theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
});
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];
const text =
  'Once you click into the text field the sidebar plugin will show up …';

export default class CustomSideToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount() {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      editorState: createEditorStateWithText(text),
    });
  }

  focus = () => {
    this.editor.focus();
  };

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
        <SideToolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <div>
                <HeadlineOneButton {...externalProps} />
                <HeadlineTwoButton {...externalProps} />
                <BlockquoteButton {...externalProps} />
                <CodeBlockButton {...externalProps} />
              </div>
            )
          }
        </SideToolbar>
      </div>
    );
  }
}
