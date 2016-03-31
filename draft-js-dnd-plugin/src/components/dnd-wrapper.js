import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import containsFiles from '../utils/containsFiles';

export default function WrapComponent(WrappedComponent, plugin) {
  class Wrapper extends Component {
    state = {};
    componentDidMount() {
      this.DOMNode = ReactDOM.findDOMNode(this.refs.com);
      this.DOMNode.addEventListener('dragover', this.onDragOver);
      this.DOMNode.addEventListener('dragleave', this.onDragLeave);
      this.DOMNode.addEventListener('drop', this.onDragDrop);

      plugin.addListener('progress', this.onProgress);
    }

    componentWillUnmount() {
      this.DOMNode.removeEventListener('dragover', this.onDragOver);
      this.DOMNode.removeEventListener('dragleave', this.onDragLeave);
      this.DOMNode.removeEventListener('drop', this.onDragDrop);

      plugin.removeListener('progress', this.onProgress);
    }

    onDragOver = (event) => {
      const { isDragging } = this.state;
      if (!containsFiles(event) || isDragging) return;
      this.setState({ isDragging: true });
    };

    onDragLeave = (event) => {
      const { isDragging } = this.state;
      if (!containsFiles(event) || !isDragging) return;
      this.setState({ isDragging: false });
    };

    onDragDrop = (event) => {
      const { draggingOver } = this.state;
      if (!containsFiles(event) || !draggingOver) return;
      this.setState({ isDragging: false });
    };

    onProgress = (event) => {
      this.setState({ progress: event, isDragging: false });
    };

    render() {
      const { isDragging, progress } = this.state;
      return <WrappedComponent ref="com" isDragging={isDragging} progress={progress} />;
    }
    }

  return (props) => <Wrapper {...props} />;
}
