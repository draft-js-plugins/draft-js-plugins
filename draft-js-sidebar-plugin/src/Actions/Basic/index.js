import React from 'react';
import insertBlock from '../../Modifiers/insertBlock';

export default class BasicAction extends React.Component {
  onClick = (event) => {
    event.preventDefault();
    const response = this.props.add();
    if (typeof response.then === 'function') {
      response.then(this.insert);
    } else {
      this.insert(response);
    }
  };

  insert = (entityKey) => {
    const state = this.props.getPluginMethods().getEditorState();
    const newState = insertBlock(state, entityKey);
    this.props.getPluginMethods().setEditorState(newState);
    this.props.onClick(entityKey);
  };

  render = () => (
    <img src={this.props.icon} onClick={this.onClick} alt="BUTTON" />
  )
}

BasicAction.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  add: React.PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  remove: React.PropTypes.func,
};
