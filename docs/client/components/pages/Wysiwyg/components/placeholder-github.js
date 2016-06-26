import React, { Component } from 'react';

class PlaceholderGithub extends Component {
  render() {
    const { blockProps, block } = this.props;

    return (
      <span contentEditable={false} data-offset-key={`${block.get('key')}-0-0`}>
        ![Uploading {blockProps.name}...](){' '}
      </span>
    );
  }
}

export default PlaceholderGithub;
