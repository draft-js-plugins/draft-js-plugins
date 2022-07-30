import { ContentBlock, ContentState, EditorBlock, EditorState } from 'draft-js';
import React, { CSSProperties } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';

export interface TableBlockProps {
  block: ContentBlock;
  blockProps: {
    getEditorState(): EditorState; // a function to get the current EditorState
  };
  contentState: ContentState;
}

export interface TableCellInfo {
  className?: string;
  colSpan?: number | undefined;
  element: 'td' | 'th';
  rowSpan?: number | undefined;
  style?: CSSProperties;
}

/**
 * Except for ordered & unordered lists, Draft does not natively support nesting a group of blocks
 * in a parent element as is needed for tables.
 * To handle tables, we store the table's size and styling specifications in the first table block
 * and render the entire table DOM structure when we render that first block, setting a data attribute
 * on each <td> element for its position in the table. Then as each subsequent block is rendered we use
 * createPortal from React-Dom to target the correct <td> element in the table to render that block into.
 */
export default function TableBlock(
  props: TableBlockProps
): React.ReactElement | null {
  const {
    block,
    contentState,
    blockProps: { getEditorState },
  } = props;
  const data = block.getData();
  const columnCount = +data.get('columns');
  const cellBlocks: ContentBlock[][] = [];
  const editorState = getEditorState();
  for (
    let cellBlock: ContentBlock | undefined = contentState.getBlockAfter(
      block.getKey()
    );
    cellBlock && ['tr', 'th', 'td'].includes(cellBlock.getType());
    cellBlock = contentState.getBlockAfter(cellBlock.getKey())
  ) {
    if (
      !cellBlocks.length ||
      cellBlocks[cellBlocks.length - 1].length === columnCount
    ) {
      cellBlocks.push([]);
    }
    cellBlocks[cellBlocks.length - 1].push(cellBlock);
  }

  // Calculate the number of rows that are all `th` cells.  If there are only `th` rows
  // findIndex will return -1, in that case we'll just treat all the cells as body cells
  const headerRowCount = Math.max(
    0,
    cellBlocks.findIndex((cellRowBlocks) =>
      cellRowBlocks.some((cellBlock) => cellBlock.getType() !== 'th')
    )
  );
  const rows = cellBlocks.map((cellRowBlocks, i) => {
    const cellElts = cellRowBlocks.map((cellBlock) => {
      const key = cellBlock.getKey();
      const cellProps = {
        block: cellBlock,
        offsetKey: DraftOffsetKey.encode(key, 0, 0),
        tree: editorState.getBlockTree(key),
      };
      return React.createElement(
        cellBlock.getType(),
        { key },
        <EditorBlock {...props} {...cellProps} />
      );
    });
    // eslint-disable-next-line react/no-array-index-key
    return React.createElement('tr', { key: String(i) }, ...cellElts);
  });

  const headerRows = rows.slice(0, headerRowCount);
  const bodyRows = rows.slice(headerRowCount);
  return (
    <table key={block.getKey()}>
      {headerRows.length > 0 && <thead>{headerRows}</thead>}
      <tbody>{bodyRows}</tbody>
    </table>
  );
}
