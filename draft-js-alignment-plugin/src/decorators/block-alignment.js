import React, { Component } from 'react';
import { Entity, EditorState } from 'draft-js';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default (setEditorState, getEditorState, theme) => WrappedComponent => {
  const { pluginOptions } = WrappedComponent;
  return class BlockAlignmentDecorator extends Component {
    // Statics
    static displayName = `BlockAlignment(${getDisplayName(WrappedComponent)})`;
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

    // Default props
    static defaultProps = {
      draggable: true,
      readOnly: false,
    };

    // Perform alignment
    align = alignment => {
      const entityKey = this.props.block.getEntityAt(0);
      if (entityKey) {
        // Store alignment in entity
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

    // Render
    render() {
      const { blockProps } = this.props;

      // Compose actions for the toolbar
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

      // Get the className
      const className = `${theme[blockProps.alignment || 'center']}`;

      // Get the wrapped component and pass alignment props
      const inner = (
        <WrappedComponent {...this.props}
          alignmentClassName={className}
          alignment={blockProps.alignment}
          align={this.align}
          alignmentStyles={theme}
          actions={actions}
        />
      );

      if (pluginOptions && pluginOptions.customAlignmentStyle) {
        // If the wrapped component defines pluginOptions.customAlignmentStyle
        // don't bother about alignment here
        return inner;
      } /* else if (!blockProps.alignment || blockProps.alignment === 'center') {
        // If it doesn't and centered, put 2 divs around
        return (
          <div className={theme.centerWrapper2}>
            <div className={className}>
              {inner}
            </div>
          </div>
        );
      }*/

      // If left/right aligned, one div with float will be sufficient
      return (
        <div className={className}>
          {inner}
        </div>
      );
    }
  };
};
