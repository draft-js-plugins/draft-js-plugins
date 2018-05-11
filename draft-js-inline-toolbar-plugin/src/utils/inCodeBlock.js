const inCodeBlock = (editorState) => {
  const startKey = editorState.getSelection().getStartKey();
  if (startKey) {
    const currentBlockType = editorState
      .getCurrentContent()
      .getBlockForKey(startKey)
      .getType();
    if (currentBlockType === 'code-block') return true;
  }

  return false;
};

export default inCodeBlock;
