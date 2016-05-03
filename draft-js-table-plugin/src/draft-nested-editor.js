import React, { Component } from 'react';
import PluginsEditor from 'draft-js-plugins-editor';
import { EditorState, ContentState, convertFromRaw, convertToRaw } from 'draft-js';
import ReactDOM from 'react-dom';

function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls)); // eslint-disable-line
  return el;
}

export default class DraftEditorBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true,
      editorState: props.editorState
        ? EditorState.createWithContent(ContentState.createFromBlockArray(convertFromRaw(props.editorState)))
        : EditorState.createWithContent(ContentState.createFromText('Insert text ...'))
    };
  }

  componentDidMount() {
    this.DOMNode = ReactDOM.findDOMNode(this);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.listener, false);
    this.props.setReadOnly(false);
  }

  onChange = editorState => {
    if (this.state.readOnly) return;
    this.setState({ editorState });
    this.props.onChange(convertToRaw(editorState.getCurrentContent()));
  }

  mouseDown = () => {
    if (this.state.readOnly === false) {
      return;
    }

    setTimeout(() => {
      this.props.setReadOnly(true);
      this.setState({ readOnly: false });
    }, 1);
    document.removeEventListener('mousedown', this.listener, false);
    document.addEventListener('mousedown', this.listener, false);
  }

  listener = e => {
    const editor = findAncestor(this.DOMNode, 'DraftEditor-root');

    if (e.target === this.DOMNode || this.DOMNode.contains(e.target) || !editor.contains(e.target)) {
      return;
    }

    document.removeEventListener('mousedown', this.listener, false);
    this.setState({ readOnly: true });
    this.props.setReadOnly(false);
  }

  render() {
    const { editorState, readOnly } = this.state;

    return (
      <div onMouseDown={this.mouseDown} style={{ position: 'relative' }}>
        <PluginsEditor {...this.props} ref="editor" editorState={editorState} onChange={this.onChange} readOnly={readOnly} />
      </div>
    );
  }
}
