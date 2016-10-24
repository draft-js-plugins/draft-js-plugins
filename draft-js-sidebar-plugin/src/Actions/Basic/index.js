import React from 'react';
import insertBlock from '../../Modifiers/insertBlock';
import styles from '../../Components/Sidebar/styles.css';

export default class BasicAction extends React.Component {
  onClick = (event) => {
    event.preventDefault();
    const entity = this.props.getEntity();
    if (typeof entity.then === 'function') {
      entity.then(this.insert);
    } else {
      this.insert(entity);
    }
  };

  insert = (entityKey) => {
    const state = this.props.getPluginMethods().getEditorState();
    const newState = insertBlock(state, entityKey);
    this.props.getPluginMethods().setEditorState(newState);
    this.props.onClick(entityKey);
  };

  render = () => (
    <li className={styles.listItem}>
      <img src={this.props.icon} onClick={this.onClick} alt="BUTTON" />
    </li>
  )
}

BasicAction.propTypes = {
  icon: React.PropTypes.string.isRequired,
  getEntity: React.PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  remove: React.PropTypes.func,
};
