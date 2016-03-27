import React, {Component, PropTypes} from "react";

const styles = {
  floatLeft: {
    float: 'left'
  },
  default: {
    height: 'auto',
    margin: '0 auto',
    width: '200px'
  }
}
class Image extends Component {
  render() {
    const {blockProps} = this.props;
    return (
        <div style={styles.default} contentEditable={false}>
          <img src={'/images'+blockProps.url} width="100%" height="auto"/>
        </div>
    );
  }
}

export default Image;
