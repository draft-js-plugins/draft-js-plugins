import React, { Component } from 'react';
import { Entity, EditorState } from 'draft-js';

const getDisplayName = (WrappedComponent) => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

export default (setEditorState, getEditorState) => function WrapComponent(WrappedComponent) {
  class Wrapper extends Component {
    static displayName = `Decorated(${getDisplayName(WrappedComponent)})`;
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent;
    static defaultProps = {
      draggable: true,
      readOnly: false,
    };
    align = alignment => {
      const entityKey = this.props.block.getEntityAt(0);
      if (entityKey) {
        Entity.mergeData(entityKey, { alignment });

        // Force refresh
        const editorState = getEditorState();
        setEditorState(
          EditorState.forceSelection(
            editorState,
            editorState.getCurrentContent().getSelectionAfter()
          )
        );
      }
    };

    render() {
      const { blockProps } = this.props;

      const actions = [
        {
          active: blockProps.alignment === 'left',
          button: <span>L</span>,
          toggle: () => this.align('left'),
          label: 'Align left',
        }, {
          active: !blockProps.alignment || blockProps.alignment === 'center',
          button: <span>C</span>,
          toggle: () => this.align('center'),
          label: 'Align center',
        }, {
          active: blockProps.alignment === 'right',
          button: <span>R</span>,
          toggle: () => this.align('right'),
          label: 'Align right',
        },
      ];

      return (
          <WrappedComponent {...this.props}
            alignment={blockProps.alignment}
            align={this.align}
            actions={actions}
          />
      );
    }
  };
  return Wrapper;
}
