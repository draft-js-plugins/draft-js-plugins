import React from 'react';

export default (type) =>
  (props) =>
    <BlockControlButton
      key={type.label}
      active={props.isActive(props.getEditorState, type.style)}
      label={type.label}
      onToggle={props.onToggle}
      style={type.style}
      theme={props.theme}
    />;

export class BlockControlButton extends React.Component {
  constructor() {
    super();

    this.onToggle = () => {
      // e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    const className = [this.props.theme.button];
    if (this.props.active) {
      className.push(this.props.theme['button-active']);
    }

    return (
      <button className={className.join(' ')} onClick={this.onToggle}>
        {this.props.label}
      </button>
    );
  }
}
