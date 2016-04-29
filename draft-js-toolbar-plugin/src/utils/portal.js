import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Store active portals and the portal dom element here
let store;
const Portal = {
  // Remove a portal from the list of portals safely
  removePortalFromList: (portals, props) => {
    if(!props) {
      return portals;
    }
    return portals.filter(portal => {
      if (props.uid) {
        return portal.uid !== props.uid;
      } else if (props.parent) {
        return portal.parent !== props.parent;
      } return portal !== props;
    });
  },

  // Add a portal to the list of portals safely
  addPortalToList: (portals, props) => {
    if(!props) {
      return portals;
    }
    return [
      ...Portal.removePortalFromList(portals, props),
      props,
    ]
  },

  // Remove a portal
  removePortal: props => {
    if (props && store) {
      store.portals = Portal.removePortalFromList(store.portals, props);
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

  // Create the store and the dom element div
  createPortalNode: () => {
    store = {
      portals: [],
      el: document.createElement('div'),
    };
    document.body.appendChild(store.el);
  },

  // Render a portal
  renderPortal: props => {
    if(!props){
      return;
    }

    if (!store) {
      Portal.createPortalNode();
    }

    store.portals = Portal.addPortalToList(store.portals, props);

    const {Element, ...actualProps} = props;
    ReactDOM.render(<Element {...actualProps} />, store.el);
  }
}
export default Portal;
