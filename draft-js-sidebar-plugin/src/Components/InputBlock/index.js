import React from 'react';
import { Entity } from 'draft-js';

class InputBlock extends React.Component {

  constructor(props) {
    super(props);
    const { block } = props;
    const data = Entity.get(block.getEntityAt(0)).getData();
    this.state = {
      data,
      inputValue: '',
      blockKey: block.getKey(),
    };
  }

  componentDidMount = () => {
    document.body.addEventListener('click', this.closeOnClick);
    setTimeout(() => {
      this.input.focus();
    }, 0);
  }

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.closeOnClick);
  };

  onKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.state.data.onValidation(this.state.inputValue, this.state.blockKey);
    }

    if (event.keyCode === 27) {
      this.state.data.cancel(this.state.blockKey);
    }
  }

  closeOnClick = (event) => {
    if (!this.input.contains(event.target)) {
      this.state.data.cancel(this.state.blockKey);
    }
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render = () => (
    <input
      type="text"
      value={this.state.inputValue}
      onChange={this.handleChange}
      onKeyUp={this.onKeyUp}
      placeholder={this.state.data.placeholder}
      ref={(i) => { this.input = i; }}
    />
  );
}

export default InputBlock;
