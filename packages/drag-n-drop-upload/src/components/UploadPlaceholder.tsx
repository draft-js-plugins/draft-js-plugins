import { ContentBlock } from 'draft-js';
import React, { ReactElement } from 'react';

interface UploadPlaceholderParams {
  block: ContentBlock;
  blockProps: { name: string };
}

export default function UploadPlaceholder({
  blockProps,
  block,
}: UploadPlaceholderParams): ReactElement {
  return (
    <span contentEditable={false} data-offset-key={`${block.get('key')}-0-0`}>
      ![Uploading {blockProps.name}...](){' '}
    </span>
  );
}
