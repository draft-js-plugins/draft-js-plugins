import React, { Component } from 'react';
import styles from './styles.css';
import ContainerBox from '../ContainerBox';

export default class AlternateContainer extends Component {

  render() {
    return (
      <div className={ styles.root }>
        <ContainerBox>
          { this.props.children }
        </ContainerBox>
      </div>
    );
  }
}
