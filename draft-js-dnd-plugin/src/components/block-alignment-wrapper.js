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
    align(align){
        var entityKey = this.props.block.getEntityAt(0);
        if (entityKey) {
            Entity.mergeData(entityKey, {align});
            // Force refresh
            this.props.blockProps.refreshEditorState();
        }
    }
    alignLeft(){
        this.align('left');
    }
    alignCenter(){
        this.align('center');
    }
    alignRight(){
        this.align('right');
    }
    render(){
        const {WrappedComponent, blockProps} = this.props;
        return (
            <WrappedComponent {...this.props}
                align={blockProps.align}
                alignLeft={::this.alignLeft}
                alignCenter={::this.alignCenter}
                alignRight={::this.alignRight}/>
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