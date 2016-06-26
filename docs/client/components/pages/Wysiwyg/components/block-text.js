import React, { Component } from 'react';

class BlockText extends Component {
  render() {
    const { blockProps } = this.props;
    const style = {
      backgroundColor: '#f3f3f3',
      border: '1px solid rgba(220,220,220,1)',
      padding: '20px',
    };
    return (
      <pre contentEditable={false} style={style}>
        {blockProps.src}
      </pre>
    );
  }
}

export default BlockText;
