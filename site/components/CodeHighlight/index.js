import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  default as ReactComponentWithPureRenderMixin,
} from 'react-addons-pure-render-mixin';

import Prism from 'prismjs';

export default class Code extends Component {
  static propTypes = {
    className: PropTypes.string,
    code: PropTypes.string,
  };

  componentDidMount() {
    this._highlight();
  }

  shouldComponentUpdate = ReactComponentWithPureRenderMixin.shouldComponentUpdate;

  componentDidUpdate() {
    this._highlight();
  }

  _highlight() {
    Prism.highlightElement(this.refs.code);
  }

  render() {
    const className = (this.props.language ? `language-${this.props.language}` : '');
    return (
      <code
        ref="code"
        className={className}
      >
        {this.props.code}
      </code>
    );
  }
}
