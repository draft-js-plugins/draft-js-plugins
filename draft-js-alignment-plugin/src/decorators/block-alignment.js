import React, { Component } from 'react';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ theme }) => WrappedComponent => class BlockAlignmentDecorator extends Component {
  // Statics
  static displayName = `BlockAlignment(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  // Default props
  static defaultProps = {
    draggable: true,
    readOnly: false,
  };

  state = {
    alignment: null
  }

  // Perform alignment
  align = alignment => {
    const { setEntityData } = this.props.blockProps;
    this.setState({ alignment });
    setEntityData({ alignment });
  };

  // Render
  render() {
    const { blockProps, className } = this.props;

    const alignment = this.state.alignment || blockProps.entityData.alignment || 'center';

    // Compose actions for the toolbar
    const actions = [
      {
        active: alignment === 'left',
        button: <span>L</span>,
        toggle: () => this.align('left'),
        label: 'Align left',
      }, {
        active: alignment === 'center',
        button: <span>C</span>,
        toggle: () => this.align('center'),
        label: 'Align center',
      }, {
        active: alignment === 'right',
        button: <span>R</span>,
        toggle: () => this.align('right'),
        label: 'Align right',
      },
    ];

    // Get the className
    const newClassName = [className, theme[alignment || 'center']].filter(p => p);

    // Get the wrapped component and pass alignment props
    return (
      <WrappedComponent {...this.props}
        className={newClassName.join(' ')}
        alignmentClassName={`${theme[alignment]}`}
        alignment={alignment}
        actions={actions}
      />
    );
  }
};
