import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  entityKey: PropTypes.string,
  getEditorState: PropTypes.func.isRequired
};

const Link = ({
  children,
  className,
  entityKey,
  getEditorState,
  target
}) => {
  const entity = getEditorState().getCurrentContent().getEntity(entityKey);
  const entityData = entity ? entity.get('data') : undefined;
  const href = (entityData && entityData.url) || undefined;

  return (
    <a
      className={className}
      title={href}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

Link.propTypes = propTypes;
export default Link;
