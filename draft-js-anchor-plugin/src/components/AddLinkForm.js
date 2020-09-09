import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import EditorUtils from 'draft-js-plugins-utils';

import URLUtils from '../utils/URLUtils';

const AddLinkForm = props => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsvalid] = useState(false);

  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  const onRef = node => {
    input.current = node;
  };

  const isUrl = urlValue => {
    if (props.validateUrl) { return props.validateUrl(urlValue); }

    return URLUtils.isUrl(urlValue);
  };

  const onChange = e => {
    const newValue = e.target.value;

    if (isInvalid && isUrl(URLUtils.normalizeUrl(newValue))) {
      setIsvalid(false);
    } else {
      setIsvalid(true);
    }

    setValue(newValue);
  };

  const onClose = () => props.onOverrideContent(undefined);

  const submit = () => {
    const { getEditorState, setEditorState } = props;

    let url = value;

    if (!URLUtils.isMail(URLUtils.normaliseMail(url))) {
      url = URLUtils.normalizeUrl(url);
      if (!isUrl(url)) {
        setIsvalid(true);
        return;
      }
    } else {
      url = URLUtils.normaliseMail(url);
    }
    setEditorState(EditorUtils.createLinkAtSelection(getEditorState(), url));
    input.current.blur();
    onClose();
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const { theme, placeholder } = props;
  const className = isInvalid
    ? clsx(theme.input, theme.inputInvalid)
    : theme.input;

  return (
    <input
      className={className}
      onBlur={onClose}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      ref={onRef}
      type="text"
      value={value}
    />
  );
};

AddLinkForm.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  getEditorState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  setEditorState: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  onOverrideContent: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  validateUrl: PropTypes.func,
};

AddLinkForm.defaultProps = {
  placeholder: 'Enter a URL and press enter',
};

export default AddLinkForm;
