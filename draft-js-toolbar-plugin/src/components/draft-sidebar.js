import React, { Component } from 'react';
import Tooltip from './tooltip';

// import {AddBlock} from "./draft-utils";

export default class DraftToolbar extends Component {
  mouseDown = (event) => {
    event.preventDefault();
  };

  add() {
    // this.props.onChange(AddBlock(this.props.editorState, null, key));
  }

  renderButton = (key) => {
    const add = () => this.add(key);
    return (
      <button onClick={add} key={key} data-tooltip={key}>
        {key.substr(0, 2)}
      </button>
    );
  };

  renderMenu = () => {
    const { blockTypes } = this.props;
    const filter = key => key.indexOf('header-') !== 0 && key !== 'unstyled';
    return (
      <div className="menu">
        {Object.keys(blockTypes).filter(filter).map(this.renderButton)}
      </div>
    );
  };

  render() {
    return (
      <Tooltip {...this.props} position="left">
        <div onMouseDown={this.mouseDown} className="draft-sidebar">
          <div className="item">
            <button>
              +
            </button>
            {this.renderMenu}
          </div>
        </div>
      </Tooltip>
    );
  }
}
