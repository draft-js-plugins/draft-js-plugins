import React, {
  useState,
  useRef,
  useEffect,
  ReactElement,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import EditorUtils from 'draft-js-plugins-utils';
import { EditorState } from 'draft-js';
import URLUtils from '../utils/URLUtils';
import { AnchorPluginTheme } from '../theme';

export interface AddLinkFormPubParams {
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
  onOverrideContent(content: undefined): void;
}

interface AddLinkFormParams extends AddLinkFormPubParams {
  validateUrl?(url: string): boolean;
  theme: AnchorPluginTheme;
  placeholder?: string;
}

const AddLinkForm = (props: AddLinkFormParams): ReactElement => {
  const [value, setValue] = useState('');
  const [isInvalid, setIsvalid] = useState(false);

  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current!.focus();
  }, []);

  const isUrl = (urlValue: string): boolean => {
    if (props.validateUrl) {
      return props.validateUrl(urlValue);
    }

    return URLUtils.isUrl(urlValue);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;

    if (isInvalid && isUrl(URLUtils.normalizeUrl(newValue))) {
      setIsvalid(false);
    } else {
      setIsvalid(true);
    }

    setValue(newValue);
  };

  const onClose = (): void => props.onOverrideContent(undefined);

  const submit = (): void => {
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
    input.current!.blur();
    onClose();
  };

  const onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      submit();
    } else if (event.key === 'Escape') {
      event.preventDefault();
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
      ref={input}
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
