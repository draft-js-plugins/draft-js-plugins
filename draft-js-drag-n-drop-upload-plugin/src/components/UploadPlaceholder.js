import React from 'react';

const UploadPlaceholder = props => {
  const { blockProps, block } = props;

  return (
    <span contentEditable={false} data-offset-key={`${block.get('key')}-0-0`}>
      ![Uploading {blockProps.name}...](){' '}
    </span>
  );
};

export default UploadPlaceholder;
