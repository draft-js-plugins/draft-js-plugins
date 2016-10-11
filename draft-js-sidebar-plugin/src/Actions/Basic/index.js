import React from 'react';
import insertBlock from '../../Modifiers/insertBlock';

export default class BasicAction extends React.Component {

  insert = (entityKey) => {
    const state = this.props.getEditorState();
    const newState = insertBlock(state, entityKey);
    this.props.setEditorState(newState);
    this.props.onClick(entityKey);
  }

  onClick = (event) => {
    event.preventDefault();
    const response = this.props.add();
    if (typeof response.then === 'function') {
      response.then(this.insert);
    } else {
      this.insert(response);
    }
  };

  render = () => (
    <button onClick={this.onClick}>
      {this.props.icon || 'BUTTON'}
    </button>
  )
}

BasicAction.propTypes = {
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.object.isRequired,
  add: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func,
};


