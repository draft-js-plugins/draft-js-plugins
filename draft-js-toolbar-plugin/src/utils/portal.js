import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let store;

const cooltip = {
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
      store.portals = cooltip.removePortalFromList(props);
      // Other tooltip was active, switching
      if (store.portals.length > 0) {
        const item = store.portals[store.portals.length - 1];
        return item ? cooltip.renderPortal(item) : null;
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
      cooltip.createPortalNode();
    }

    store.portals = [
      ...cooltip.removePortalFromList(props),
      props,
    ];

    const {Element, ...actualProps} = props;
    ReactDOM.render(<Element {...actualProps} />, store.el);
  }
}
export default cooltip;
