import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unionClassNames from 'union-class-names';
import EditorUtils from 'draft-js-plugins-utils';

import URLUtils from '../../utils/URLUtils';

export default class AddLinkForm extends Component {
  static propTypes = {
    getEditorState: PropTypes.func.isRequired,
    setEditorState: PropTypes.func.isRequired,
    onOverrideContent: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    placeholder: 'Enter a URL and press enter'
  };

  state = {
    value: '',
    isInvalid: false
  };

  componentDidMount() {
    this.input.focus();
  }

  onRef = (node) => { this.input = node; }

  onChange = ({ target: { value } }) => {
    const nextState = { value };
    if (this.state.isInvalid && URLUtils.isUrl(URLUtils.normalizeUrl(value))) {
      nextState.isInvalid = false;
    }
    this.setState(nextState);
  };

  onClose = () =>
    this.props.onOverrideContent(undefined);

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.submit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      this.onClose();
    }
  }

  submit() {
    const { getEditorState, setEditorState } = this.props;
    let { value: url } = this.state;
    if (!URLUtils.isMail(URLUtils.normaliseMail(url))) {
      url = URLUtils.normalizeUrl(url);
      if (!URLUtils.isUrl(url)) {
        this.setState({ isInvalid: true });
        return;
      }
    } else {
      url = URLUtils.normaliseMail(url);
    }
    setEditorState(EditorUtils.createLinkAtSelection(getEditorState(), url));
    this.input.blur();
    this.onClose();
  }

  render() {
    const {
      theme,
      placeholder
    } = this.props;
    const { value, isInvalid } = this.state;
    const className = isInvalid
      ? unionClassNames(theme.input, theme.inputInvalid)
      : theme.input;

    return (
      <input
        className={className}
        onBlur={this.onClose}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        placeholder={placeholder}
        ref={this.onRef}
        type="text"
        value={value}
      />
    );
  }
}
