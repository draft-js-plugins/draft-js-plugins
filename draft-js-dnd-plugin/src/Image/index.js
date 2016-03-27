import React, {Component, PropTypes} from "react";
import Draggable from "../components/block-draggable-wrapper";
import aligning from "../components/block-alignment-wrapper";

class Image extends Component {
  remove = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  render() {
    const {blockProps, attachButtons, theme, align} = this.props;

    const buttons = [
      <span className={ theme.get('imageButton') }
            onClick={ this.props.alignLeft }
            style={{marginLeft: '-2.4em'}}
            role="button" key={'left'}>
        L
      </span>,
      <span className={ theme.get('imageButton') }
            onClick={ this.props.alignCenter }
            role="button" key={'center'}>
        C
      </span>,
      <span className={ theme.get('imageButton') }
            onClick={ this.props.alignRight }
            style={{marginLeft: '0.9em'}}
            role="button" key={'right'}>
        R
      </span>
    ];
    
    return (
        <div className={ theme.get('imageWrapper')+' '+theme.get(align||'center') } contentEditable={false}>
          <img src={'/images'+blockProps.url} width="100%" height="auto" className={ theme.get('image') }/>
          { attachButtons ? buttons : null }
        </div>
    );
  }
}

export default Draggable(aligning(Image));
