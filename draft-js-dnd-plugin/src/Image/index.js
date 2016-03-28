import React, {Component, PropTypes} from "react";
import Draggable from "../components/block-draggable-wrapper";
import Alignment from "../components/block-alignment-wrapper";

class Image extends Component {
  remove = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  render() {
    const {blockProps, attachButtons, theme, alignment} = this.props;

    const buttons = [
      <span className={ theme.get('imageButton') }
            onClick={ ()=>this.props.align('left') }
            style={{marginLeft: '-2.4em'}}
            role="button" key={'left'}>
        L
      </span>,
      <span className={ theme.get('imageButton') }
            onClick={ ()=>this.props.align('center') }
            role="button" key={'center'}>
        C
      </span>,
      <span className={ theme.get('imageButton') }
            onClick={ ()=>this.props.align('right') }
            style={{marginLeft: '0.9em'}}
            role="button" key={'right'}>
        R
      </span>
    ];
    
    return (
        <div className={ theme.get('imageWrapper')+' '+theme.get(alignment||'center') } contentEditable={false}>
          <img src={blockProps.src || ('/images'+blockProps.url)} width="100%" height="auto" className={ theme.get('image') }/>
          { attachButtons ? buttons : null }
        </div>
    );
  }
}

export default Draggable(Alignment(Image));
