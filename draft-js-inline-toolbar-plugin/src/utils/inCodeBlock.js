const inCodeBlock = (editorState) => {
  const startKey = editorState.getSelection().getStartKey();
  const endKey = editorState.getSelection().getEndKey();
  if (startKey && endKey) {
    const contentState = editorState.getCurrentContent();
    const blocks = contentState.getBlocksAsArray();

    const selectedBlocks = blocks.slice(
      Math.max(blocks.indexOf(contentState.getBlockForKey(startKey)) - 1, 0),
      Math.min(blocks.indexOf(contentState.getBlockForKey(endKey)) + 1, blocks.length)
    );

    return selectedBlocks.find((block) => block.getType() === 'code-block');
  }

  return false;
};

export default inCodeBlock;
