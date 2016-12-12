import React, { Component } from 'react';

export default ({ children }) => (
  class imageButton extends Component {

    activate = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.props.addImageFile();
    }

    preventBubblingUp = (event) => { event.preventDefault(); }

    render() {
      const { theme } = this.props;
      return (
        <div
          className={theme.buttonWrapper}
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={theme.button}
            onClick={this.activate}
            type="button"
            children={children}
          />
        </div>

      );
    }
  }
);
