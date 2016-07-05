import React, { PropTypes } from 'react'

export default function(type) {
  const InlineStyleControls = (props) => {
    return (
        <InlineControlButton
            key={type.label}
            active={props.isActive(props.getEditorState, type.style)}
            label={type.label}
            onToggle={props.onToggle}
            style={type.style}
            theme={props.theme}
        />
    );
  };
  return InlineStyleControls
}

export class InlineControlButton extends React.Component {
  constructor() {
    super();

    this.onToggle = (e) => {
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
