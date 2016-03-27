import React, {Component, PropTypes} from "react";
import {Entity} from "draft-js";

const getDisplayName = (WrappedComponent) => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

class Wrapper extends Component {
    static defaultProps = {
        draggable: true,
        readOnly: false
    }
    positionLeft(){
        var entityKey = this.props.block.getEntityAt(0);
        if (entityKey) {
            Entity.mergeData(entityKey, {position: 'left'});
            this.props.blockProps.refreshContent();
        }
    }
    positionCenter(){
        var entityKey = this.props.block.getEntityAt(0);
        if (entityKey) {
            Entity.mergeData(entityKey, {position: 'center'});
            this.props.blockProps.refreshContent();
        }
    }
    positionRight(){
        var entityKey = this.props.block.getEntityAt(0);
        if (entityKey) {
            Entity.mergeData(entityKey, {position: 'right'});
            this.props.blockProps.refreshContent();
        }
    }
    render(){
        const {draggable, WrappedComponent, blockProps} = this.props;
        return (
            <WrappedComponent {...this.props}
                position={blockProps.position}
                positionLeft={::this.positionLeft}
                positionCenter={::this.positionCenter}
                positionRight={::this.positionRight}/>
        );
    }
};

// Export
export default function WrapComponent(component, options){
    return class extends Component {
        static displayName = `Decorated(${getDisplayName(component)})`;
        render(){
            return (
                <Wrapper {...this.props} {...options} WrappedComponent={component}></Wrapper>
            );
        }
    }
}