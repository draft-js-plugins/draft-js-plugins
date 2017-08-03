/* eslint-disable no-param-reassign */
import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  entityData: PropTypes.object,
  entityKey: PropTypes.string,
  getEditorState: PropTypes.func
};

const Link = ({ children, entityData, entityKey, getEditorState, className }) => {
  if (!entityData) {
    if (!getEditorState) return <span />;
    const entity = getEditorState().getCurrentContent().getEntity(entityKey);
    entityData = entity ? entity.get('data') : undefined;
  }
  const href = (entityData && entityData.url) || '';

  return (
    <a
      className={className}
      title={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

Link.propTypes = propTypes;
export default Link;
