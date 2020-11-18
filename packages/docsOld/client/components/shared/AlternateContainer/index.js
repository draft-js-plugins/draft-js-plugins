import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './styles.css';
import ContainerBox from '../ContainerBox';

export default class AlternateContainer extends Component {
  render() {
    const { className } = this.props;
    const combinedClassName = clsx(styles.root, className);
    return (
      <div className={combinedClassName}>
        <ContainerBox>{this.props.children}</ContainerBox>
      </div>
    );
  }
}
