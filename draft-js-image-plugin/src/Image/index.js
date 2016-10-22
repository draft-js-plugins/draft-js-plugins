import { Entity } from 'draft-js';
import unionClassNames from 'union-class-names';
import React, { Component } from 'react';

export default class Image extends Component {

  render() {
    const { block, className, theme = {}, ...otherProps } = this.props;
    const combinedClassName = unionClassNames(theme.image, className);
    const data = Entity.get(block.getEntityAt(0)).getData();

    return (
      <img
        {...otherProps}
        src={data.src}
        role="presentation"
        className={combinedClassName}
      />
    );
  }
}
