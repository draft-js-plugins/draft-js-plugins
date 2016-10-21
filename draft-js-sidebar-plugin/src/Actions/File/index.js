import React from 'react';
import insertBlock from '../../Modifiers/insertBlock';

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
        const response = this.props.add(data);
        if (typeof response.then === 'function') {
          response.then(this.insert);
        } else {
          this.insert(response);
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
    <img
      src={this.props.icon}
      alt="BUTTON"
      onClick={this.onClick}
    />
  )
}

FileAction.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  add: React.PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  remove: React.PropTypes.func,
};
