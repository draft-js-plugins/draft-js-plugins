import React from 'react';
import insertBlock from '../../Modifiers/insertBlock';
import styles from '../../Components/Sidebar/styles.css';

export default class FileAction extends React.Component {

  onClick = (event) => {
    event.preventDefault();
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = this.onChange;
    input.click();
  };

  onChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = ((loadEvent) => {
        const data = {
          fileReader: loadEvent.target,
          file: files[0],
        };
        const entity = this.props.getEntity(data);
        if (typeof entity.then === 'function') {
          entity.then(this.insert);
        } else {
          this.insert(entity);
        }
      });

      // Read in the image file as a data URL.
      reader.readAsDataURL(files[0]);
    }
  }

  insert = (entityKey) => {
    const state = this.props.getPluginMethods().getEditorState();
    const newState = insertBlock(state, entityKey);
    this.props.getPluginMethods().setEditorState(newState);
    this.props.onClick(entityKey);
  };

  render = () => (
    <li className={styles.listItem}>
      <img
        src={this.props.icon}
        alt="BUTTON"
        onClick={this.onClick}
      />
    </li>
  )
}

FileAction.propTypes = {
  icon: React.PropTypes.string.isRequired,
  getEntity: React.PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  remove: React.PropTypes.func,
};
