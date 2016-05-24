import React, { Component } from 'react';
import { EditorState } from 'draft-js';

// Plugin-Editor
import Editor from 'draft-js-plugins-editor';
import createCleanupEmptyPlugin from 'draft-js-cleanup-empty-plugin';
import createEntityPropsPlugin from 'draft-js-entity-props-plugin';
import createFocusPlugin, { FocusDecorator } from 'draft-js-focus-plugin';
import createDndPlugin, { DraggableDecorator } from 'draft-js-dnd-plugin';
import createToolbarPlugin, { ToolbarDecorator } from 'draft-js-toolbar-plugin';
import createAlignmentPlugin, { AlignmentDecorator } from 'draft-js-alignment-plugin';
import createResizeablePlugin, { ResizeableDecorator } from 'draft-js-resizeable-plugin';
// Blocks
import createImagePlugin, { imageCreator, imageStyles } from 'draft-js-image-plugin';
import createTablePlugin, { tableCreator, tableStyles } from 'draft-js-table-plugin';

const image = ResizeableDecorator({
  resizeSteps: 10,
  handles: true,
  vertical: 'auto'
})(
  DraggableDecorator(
    FocusDecorator(
      AlignmentDecorator(
        ToolbarDecorator()(
          imageCreator({ theme: imageStyles })
        )
      )
    )
  )
);
const table = FocusDecorator(
  DraggableDecorator(
    ToolbarDecorator()(
      tableCreator({ theme: tableStyles, Editor })
    )
  )
);

// import TextToolbar from 'draft-js-toolbar-plugin/components/text-toolbar';

// Components
import PlaceholderGithub from '../components/placeholder-github';
import BlockText from '../components/block-text';

// Utils
import addBlock from 'draft-js-dnd-plugin/modifiers/addBlock';
import mockUpload from '../utils/mockUpload';

import styles from './styles.css';

// Init Plugins
const plugins = [
  createCleanupEmptyPlugin({
    types: ['block-image', 'block-table']
  }),
  createEntityPropsPlugin({ }),
  createToolbarPlugin({
    __toolbarHandler: {
      add: props => console.log('Add toolbar', props),
      remove: props => console.log('Remove toolbar', props),
    }, textActions: [{
      button: <span>Table</span>,
      label: 'Create a table',
      active: (block, editorState) => editorState.getSelection().isCollapsed(),
      toggle: (block, action, editorState, setEditorState) => setEditorState(addBlock(editorState, editorState.getSelection(), 'block-table', {})),
    }]
  }),
  createFocusPlugin({}),
  createAlignmentPlugin({}),
  createDndPlugin({
    allowDrop: true,
    handleUpload: (data, success, failed, progress) =>
      mockUpload(data, success, failed, progress),
    handlePlaceholder: (state, selection, data) => {
      const { type } = data;
      if (type.indexOf('image/') === 0) {
        return 'block-image';
      } else if (type.indexOf('text/') === 0 || type === 'application/json') {
        return 'placeholder-github';
      } return undefined;
    }, handleBlock: (state, selection, data) => {
      const { type } = data;
      if (type.indexOf('image/') === 0) {
        return 'block-image';
      } else if (type.indexOf('text/') === 0 || type === 'application/json') {
        return 'block-text';
      } return undefined;
    },
  }),
  createResizeablePlugin({}),
  // Blocks
  createImagePlugin({ component: image }),
  createTablePlugin({ component: table, Editor }),
];

class SimpleWysiwygEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    draggingOver: false,
  };

  componentDidMount() {
    // const { editorState } = this.state;
    // this.setState({ editorState: addBlock(editorState, editorState.getSelection(), 'table', {}) });
  }

  onChange = (editorState) => {
    // console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    this.setState({ editorState });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  blockRendererFn = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === 'placeholder-github') {
      return { component: PlaceholderGithub };
    } else if (type === 'block-text') {
      return { component: BlockText };
    } return undefined;
  }

  render() {
    const { editorState } = this.state;
    const { isDragging, progress } = this.props;
    const classNames = [styles.editor];
    if (isDragging) classNames.push(styles.dnd);
    if (progress) classNames.push(styles.uploading);

    return (
      <div className={classNames.join(' ')} onClick={this.focus}>
        <Editor editorState={editorState}
          onChange={this.onChange}
          blockRendererFn={this.blockRendererFn}
          plugins={plugins}
          ref="editor"
        />
      </div>
    );
  }
}

export default SimpleWysiwygEditor;
