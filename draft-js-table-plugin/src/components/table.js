import React, { Component } from 'react';
import Wrapper from '../decorators/generic';

export default Wrapper(
  class Table extends Component {
    state = { cells: 2 };
    // Set pluginOptions
    static pluginOptions = {
      // Handle focused style manually
      customFocusedStyle: true,
      // Handle alignment style manually
      customAlignmentStyle: true,
      // Handle upload progress style manually
      customUploadProgress: true,
      // Handle dnd onDragStart/draggable manually
      customHandleDnd: true
    }

    componentDidMount() {
      const { addActions } = this.props;
      if (addActions) {
        addActions([{
          button: <span>+ Row</span>,
          label: 'Add a row',
          active: false,
          toggle: () => this.addRow(),
        }, {
          button: <span>+ Column</span>,
          label: 'Add a column',
          active: false,
          toggle: () => this.addColumn(),
        }]);
      }
    }

    addRow = () => {
      const { saveEntityData, entityData } = this.props;
      const rows = entityData.rows || [{}];
      saveEntityData({ ...entityData, rows: [...rows, []] });
    }

    addColumn = () => {
      const { saveEntityData, entityData } = this.props;
      const numberOfColumns = (entityData.numberOfColumns || 1) + 1;
      saveEntityData({ ...entityData, numberOfColumns });
    }

    updateEntityData = (editorState, row, column) => {
      const { saveEntityData, entityData } = this.props;
      const rows = entityData.rows || [[]];
      while (rows[row].length < (entityData.numberOfColumns || 1)) {
        rows[row].push(null);
      }
      rows[row][column] = editorState;
      saveEntityData({ ...entityData, rows });
    }

    render() {
      const { theme, renderNestedEditor, entityData } = this.props;

      const rows = entityData.rows || [[]];
      const columns = entityData && entityData.numberOfColumns ? entityData.numberOfColumns : 1;

      return (
        <table className={theme.table} cellSpacing="0">
          {/* <thead>
           <tr>
           <th>1</th>
           <th>2</th>
           </tr>
           </thead>*/}
          <tbody>
          {rows.map((row, rowI) =>
            <tr key={rowI}>
              {Array.from(new Array(columns), (x, i) => i).map((column, columnI) =>
                <td key={columnI}>{renderNestedEditor(
                  this,
                  row[columnI],
                  (editorState) => this.updateEntityData(editorState, rowI, columnI))
                }</td>
              )}
            </tr>
          )}
          </tbody>
        </table>
      );
    }
  });
