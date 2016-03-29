import React, {Component, PropTypes} from "react";

// Export
export default function WrapComponent(component, options){
    const {useDiv} = options||{};

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
            if(useDiv){
                return (
                    <div onDragStart={::this.startDrag} draggable={draggable}>
                        <WrappedComponent {...this.props}/>
                    </div>
                );
            }

            return <WrappedComponent {...this.props} onDragStart={::this.startDrag} draggable={draggable}/>;
        }
    }

    return (props)=>{
        return (
            <Wrapper {...props} WrappedComponent={component}></Wrapper>
        );
    }
}