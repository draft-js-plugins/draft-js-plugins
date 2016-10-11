import React from 'react';
import BasicAction from './Basic';
import TextAction from './Text';

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
  }
};
export default createActionButton;

