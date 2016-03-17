import React, {Component} from 'react';

export default (EmbeddedComponent, props) => class extends Component {
  static displayName = `Decorated${EmbeddedComponent.displayName}`;

  render() {
    return (<EmbeddedComponent {...this.props} {...props}/>);
  }
}
