import React, { Component } from 'react';
import { EditorState, DefaultDraftBlockRenderMap } from 'draft-js';

// Plugin-Editor
import Editor from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
// import createFocusPlugin, { FocusDecorator } from 'draft-js-focus-plugin'; // eslint-disable-line import/no-unresolved
// import createDndPlugin, { DraggableDecorator } from 'draft-js-dnd-plugin'; // eslint-disable-line import/no-unresolved
// import createAlignmentPlugin, { AlignmentDecorator } from 'draft-js-alignment-plugin'; // eslint-disable-line import/no-unresolved
// import createResizeablePlugin, { ResizeableDecorator } from 'draft-js-resizeable-plugin'; // eslint-disable-line import/no-unresolved
// import createImagePlugin, { imageCreator, imageStyles } from 'draft-js-image-plugin'; // eslint-disable-line import/no-unresolved

import { Map } from 'immutable';

// const image = ResizeableDecorator({
//   resizeSteps: 10,
//   handles: true,
//   vertical: 'auto'
// })(
//   DraggableDecorator(
//     FocusDecorator(
//       AlignmentDecorator(
//         ToolbarDecorator()(
//           imageCreator({ theme: imageStyles })
//         )
//       )
//     )
//   )
// );
// const table = FocusDecorator(
//   DraggableDecorator(
//     ToolbarDecorator()(
//       tableCreator({ theme: tableStyles, Editor })
//     )
//   )
// );
// import TextToolbar from 'draft-js-inline-toolbar-plugin/components/text-toolbar';
// import addBlock from 'draft-js-dnd-plugin/modifiers/addBlock'; // eslint-disable-line import/no-unresolved

// Components
import PlaceholderGithub from '../components/placeholder-github';
import BlockText from '../components/block-text';

// Utils
// import mockUpload from '../utils/mockUpload';

import styles from './styles.css';

// const image = ResizeableDecorator({
//   resizeSteps: 10,
//   handles: true,
//   vertical: 'auto'
// })(
//   DraggableDecorator(
//     FocusDecorator(
//       AlignmentDecorator(
//         ToolbarDecorator()(
//           imageCreator({ theme: imageStyles })
//         )
//       )
//     )
//   )
// );

// Init Plugins
const plugins = [
  // createFocusPlugin({}),
  // createAlignmentPlugin({}),
  // createDndPlugin({
  //   allowDrop: true,
  //   handleUpload: (data, success, failed, progress) =>
  //     mockUpload(data, success, failed, progress),
  //   handlePlaceholder: (state, selection, data) => {
  //     const { type } = data;
  //     if (type.indexOf('image/') === 0) {
  //       return 'block-image';
  //     } else if (type.indexOf('text/') === 0 || type === 'application/json') {
  //       return 'placeholder-github';
  //     } return undefined;
  //   },
  //   handleBlock: (state, selection, data) => {
  //     const { type } = data;
  //     if (type.indexOf('image/') === 0) {
  //       return 'block-image';
  //     } else if (type.indexOf('text/') === 0 || type === 'application/json') {
  //       return 'block-text';
  //     } return undefined;
  //   },
  // }),
  // createResizeablePlugin({}),
  // Blocks
  // createImagePlugin({ component: image }),
];

class SimpleWysiwygEditor extends Component {
  constructor(props) {
    super(props);
    this.blockRenderMap = DefaultDraftBlockRenderMap.merge(
      this.customBlockRendering(props)
    );
  }
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
    this.editor.focus();
  };

  blockRendererFn = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === 'placeholder-github') {
      return { component: PlaceholderGithub };
    } else if (type === 'block-text') {
      return { component: BlockText };
    } else if (type === 'block-image') {
      // return { component: image };
    } return undefined;
  }

  customBlockRendering = (props) => {
    const { blockTypes } = props;
    const newObj = {
      paragraph: {
        element: 'div',
      },
      unstyled: {
        element: 'div',
      },
      'block-image': {
        element: 'div',
      },
      'block-table': {
        element: 'div',
      }
    };
    Object.keys(blockTypes).forEach((type) => {
      newObj[type] = {
        element: 'div'
      };
    });
    return Map(newObj);
  }

  render() {
    const { editorState } = this.state;
    const { isDragging, progress } = this.props;
    const classNames = [styles.editor];
    if (isDragging) classNames.push(styles.dnd);
    if (progress) classNames.push(styles.uploading);

    return (
      <div className={classNames.join(' ')} onClick={this.focus}>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          blockRendererFn={this.blockRendererFn}
          blockRenderMap={this.blockRenderMap}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
      </div>
    );
  }
}

export default SimpleWysiwygEditor;
