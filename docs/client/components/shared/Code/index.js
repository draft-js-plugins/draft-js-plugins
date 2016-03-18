import {
  default as React,
  Component,
  PropTypes,
} from 'react';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import styles from './styles.css';

// require('prismjs/themes/prism.css');

export default class Code extends Component {

  static propTypes = {
    code: PropTypes.string,
    children: PropTypes.any,
  };

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const codeClassName = (this.props.language ? `language-${this.props.language}` : '');
    return (
      <pre className={ styles.root } >
        <code
          className={ codeClassName }
          dangerouslySetInnerHTML={{ __html: this.props.code }}
        />
      </pre>
    );
  }
}
