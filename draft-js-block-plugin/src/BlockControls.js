import React, { PropTypes } from 'react'

export default function(type) {
  const BlockStyleControls = (props) => {
    return (
        <BlockControlButton
            key={type.label}
            active={props.isActive(props.getEditorState, type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
            theme={props.theme}
        />
    );
  };
  return BlockStyleControls
}

export class BlockControlButton extends React.Component {
  constructor() {
    super();

    this.onToggle = (e) => {
      // e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = [this.props.theme['button']]
    if (this.props.active) {
      className.push(this.props.theme['button-active'])
    }

    return (
      <button className={className.join(' ')} onClick={this.onToggle}>
        {this.props.label}
      </button>
    );
  }
}
