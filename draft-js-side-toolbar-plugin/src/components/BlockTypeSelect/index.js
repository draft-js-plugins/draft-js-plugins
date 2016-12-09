import React from 'react';

export default class BlockTypeSelect extends React.Component {

  state = {
    visible: false,
    style: {
      transform: 'translate(-50%) scale(0)',
      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
    }
  }

  show = () => {
    this.setState({
      visible: true,
      style: { transform: 'translate(-50%) scale(1)' }
    });
  }


  hide = () => {
    this.setState({
      visible: false,
      style: { transform: 'translate(-50%) scale(0)' }
    });
  }

  onMouseDown = (clickEvent) => {
    this.state.visible ? this.hide() : this.show()
  }

  render() {
    const { theme, getEditorState, setEditorState } = this.props;
    return (
      <div>
        <div className={theme.blockTypeSelectStyles.blockType}
             onMouseDown={this.onMouseDown}>
          <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
        {/*
          The spacer is needed so the popup doesn't go away when moving from the
          blockType div to the popup.
        */}
        <div className={theme.blockTypeSelectStyles.spacer} />
        <div className={theme.blockTypeSelectStyles.popup} style={this.state.style}>
          {this.props.structure.map((Component, index) => (
            <Component
              key={index}
              getEditorState={getEditorState}
              setEditorState={setEditorState}
              theme={theme.buttonStyles}
            />
          ))}
        </div>
      </div>
    );
  }
}
