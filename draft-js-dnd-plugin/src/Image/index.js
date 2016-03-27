import React, {Component, PropTypes} from "react";
import Draggable from "../components/block-draggable";

class Image extends Component {
  remove = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  render() {
    const {blockProps, attachButtons, theme} = this.props;

    const buttons = [
      <span className={ theme.get('imageButton') }
            onClick={ this.remove }
            role="button" key={'remove'}>
        ✕
      </span>
    ];
    
    return (
        <div className={ theme.get('imageWrapper') } contentEditable={false}>
          <img src={'/images'+blockProps.url} width="100%" height="auto" className={ theme.get('image') }/>
          { attachButtons ? buttons : null }
        </div>
    );
  }
}

export default Draggable(Image);
