import katex from 'katex';
import React from 'react';

export default class KatexOutput extends React.Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidMount() {
    this.update();
  }

  componentWillReceiveProps({ content }) {
    if (content !== this.props.content) {
      this.update();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  update() {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      katex.render(
        this.props.content,
        this.container,
        { displayMode: true }
      );
    }, 0);
  }

  render() {
    return (
      <div
        ref={(container) => { this.container = container; }}
        onClick={this.props.onClick}
      />
    );
  }
}
