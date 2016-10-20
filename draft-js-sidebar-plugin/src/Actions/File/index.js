import React from 'react';
import insertBlock from '../../Modifiers/insertBlock';

export default class FileAction extends React.Component {

  onClick = (event) => {
    event.preventDefault();
    this.input.click();
  };

  onChange = (event) => {
    event.persist();
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
    <div>
      <span onClick={this.onClick}>
        <img src={this.props.icon} alt="BUTTON" />
      </span>
      <input
        type="file"
        onChange={this.onChange}
        name="file"
        hidden
        ref={(i) => { this.input = i; }}
      />
    </div>
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
