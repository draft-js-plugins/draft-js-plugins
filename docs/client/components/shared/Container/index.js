import React, { Component } from 'react';
import styles from './styles.css';
import ContainerBox from '../ContainerBox';
import unionClassNames from 'union-class-names';

export default class Container extends Component {

  render() {
    const { className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(styles.root, className);
    return (
      <div className={ combinedClassName }>
        <ContainerBox>
          { this.props.children }
        </ContainerBox>
      </div>
    );
  }
}
