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
    align(alignment){
        var entityKey = this.props.block.getEntityAt(0);
        if (entityKey) {
            Entity.mergeData(entityKey, {alignment});
            // Force refresh
            this.props.blockProps.refreshEditorState();
        }
    }
    render(){
        const {WrappedComponent, blockProps} = this.props;
        return (
            <WrappedComponent {...this.props}
                alignment={blockProps.alignment}
                align={::this.align}/>
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