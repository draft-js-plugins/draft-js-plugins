import React from 'react';
import insertBlock from '../../Modifiers/insertBlock';

export default class FileAction extends React.Component {

  insert = (entityKey) => {
    const state = this.props.getEditorState();
    const newState = insertBlock(state, entityKey);
    this.props.setEditorState(newState);
    this.props.onClick(entityKey);
  }

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
      reader.onload = ((event) => {
        console.log(event);
        const data = {
          fileReader: event.target,
          file: files[0],
        }
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

  render = () => (
    <div>
      <button onClick={this.onClick}>
        {this.props.icon || 'BUTTON'}
      </button>
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
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.object.isRequired,
  add: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func,
};


