import React from 'react';
import BasicAction from './Basic';
import TextAction from './Text';
import FileAction from './File';

export const INPUT_TYPES = {
  BASIC: 'BASIC',
  TEXT: 'TEXT',
  FILE: 'FILE',
};


const createActionButton = (props) => {
  const { inputType } = props;

  if (Object.values(INPUT_TYPES).indexOf(inputType) === -1) {
    throw new Error(`type: ${inputType} unknown`);
  }

  switch (inputType) {
    case INPUT_TYPES.BASIC:
      return <BasicAction {...props} />;

    case INPUT_TYPES.TEXT:
      return <TextAction {...props} />;

    case INPUT_TYPES.FILE:
      return <FileAction {...props} />;

    default:
      throw new Error(`unknown input type ${inputType}`);
  }
};
export default createActionButton;
