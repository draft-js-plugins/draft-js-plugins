import React, {Component, PropTypes} from "react";

class Wrapper extends Component {
    static defaultProps = {
        draggable: true,
        readOnly: false
    }
    // Handle start-drag and setData with blockKey
    startDrag(e){
        var allow = this.props.draggable && !this.props.readOnly;
        if(!allow) return;

        e.dataTransfer.dropEffect = 'move';
        // Declare data and give info that its an existing key and a block needs to be moved
        e.dataTransfer.setData("text", 'key:'+this.props.block.key);
    }
    render(){
        const {draggable, WrappedComponent} = this.props;
        return (
            <div onDragStart={::this.startDrag} draggable={draggable}>
                <WrappedComponent {...this.props}/>
            </div>
        );
    }
};

// Export
export default function WrapComponent(component, options){
    return (props)=>{
        return (
            <Wrapper {...props} {...options} WrappedComponent={component}></Wrapper>
        );
    }
}