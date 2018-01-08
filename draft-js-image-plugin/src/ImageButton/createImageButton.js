/* eslint-disable react/no-children-prop */
import React, { Component } from 'react';

export default ({ children }) =>
  class imageButton extends Component {
    constructor(props) {
      super(props);

      this.inputStyle = {
        display: 'none',
      };
    }


    onClick = (e) => {
      e.preventDefault();
      this.input.click();
    }

    inputChange = (e) => {
      const file = e.target.files[0];
      const { handleUpload, getEditorState, setEditorState } = this.props;
      if (handleUpload) {
        handleUpload(null, [file], { getEditorState, setEditorState });
      }
    };

    preventBubblingUp = (event) => {
      event.preventDefault();
    };

    setInputRef = (ref) => {
      this.input = ref;
    };

    render() {
      const { theme } = this.props;
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={theme.button}
            onClick={this.onClick}
            type="button"
            children={children}
          />

          <div className={theme.addImage}>
            <input
              type="file"
              ref={this.setInputRef}
              onChange={this.inputChange}
              style={this.inputStyle}
            />
          </div>
        </div>
      );
    }
  };
