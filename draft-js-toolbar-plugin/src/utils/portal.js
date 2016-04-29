import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let store;

const Portal = {
  removePortalFromList: props => {
    if(!props) {
      return store.portals;
    }
    return store.portals.filter(portal => {
      if (props.uid) {
        return portal.uid !== props.uid;
      } else if (props.parent) {
        return portal.parent !== props.parent;
      } return portal !== props;
    });
  },

  removePortal: props => {
    if (props && store) {
      store.portals = Portal.removePortalFromList(props);
      // Other tooltip was active, switching
      if (store.portals.length > 0) {
        const item = store.portals[store.portals.length - 1];
        return item ? Portal.renderPortal(item) : null;
      }

      ReactDOM.unmountComponentAtNode(store.el);
      if (store.el.parentNode) {
        store.el.parentNode.removeChild(store.el);
      }

      store = null;
    } return undefined;
  },

  createPortalNode: () => {
    store = {
      portals: [],
      el: document.createElement('div'),
    };
    document.body.appendChild(store.el);
  },

  renderPortal: props => {
    if(!props){
      return;
    }

    if (!store) {
      Portal.createPortalNode();
    }

    store.portals = [
      ...Portal.removePortalFromList(props),
      props,
    ];

    console.log(store.portals);

    const {Element, ...actualProps} = props;
    ReactDOM.render(<Element {...actualProps} />, store.el);
  }
}
export default Portal;
