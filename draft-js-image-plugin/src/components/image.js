import React, { Component } from 'react';

const ImageComponent = ({ theme }) => class Image extends Component {
  renderProgress = progress => progress >= 0 // eslint-disable-line no-confusing-arrow
    ? <div className={ theme.imageLoader } style={{ width: `${100 - progress}%` }} />
    : null;

  render() {
    const { alignmentClassName, focusClassName, blockProps, style, ...other } = this.props;
    const { progress, src, url } = blockProps.entityData;

    return (
      <div className={[theme.imageWrapper, alignmentClassName].filter(x => x).join(' ')} contentEditable={false} style={style}>
        <img {...other} src={src || url} alt="" width="100%" height="100%" className={[theme.image, focusClassName].filter(x => x).join(' ')} />
        {this.renderProgress(progress, theme)}
      </div>
    );
  }
};

export default ImageComponent;
