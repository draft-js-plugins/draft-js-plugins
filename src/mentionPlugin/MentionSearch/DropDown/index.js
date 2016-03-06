import React, {
  // PropTypes,
  Component,
} from 'react';
import styles from './styles';

export default class Dropdown extends Component {

  render() {
    return (
      <div style={ styles.root } contentEditable={ false }>
        { this.props.children }
      </div>
    );
  }
}
