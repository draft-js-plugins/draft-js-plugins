import React, { Component } from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { EditorState, Entity, AtomicBlockUtils } from 'draft-js';
import { Map } from 'immutable';
import sinon from 'sinon';
import createVideoPlugin from '../createVideoPlugin';
import utils from '../video/utils';
import * as customType from '../video/constants';

describe('CreateVideoPlugin without config', () => {
  it('default video plugin handle youtube url', () => {
    const videoPlugin = createVideoPlugin();
    const text = 'https://www.youtube.com/watch?v=YsRMoWYGLNA';
    const pluginsParams = {
      getEditorState: sinon.stub().returns(EditorState.createEmpty()),
      setEditorState: sinon.spy(),
    };

    const result = videoPlugin.handlePastedText(text, null, pluginsParams);
    expect(result).to.eq(true);
    expect(pluginsParams.getEditorState.called).to.eq(true);
    expect(pluginsParams.setEditorState.called).to.eq(true);
  });
  it('default video plugin handle viemo url', () => {
    const videoPlugin = createVideoPlugin();
    const text = 'https://vimeo.com/153979733';
    const pluginsParams = {
      getEditorState: sinon.stub().returns(EditorState.createEmpty()),
      setEditorState: sinon.spy(),
    };

    const result = videoPlugin.handlePastedText(text, null, pluginsParams);
    expect(result).to.eq(true);
    expect(pluginsParams.getEditorState.called).to.eq(true);
    expect(pluginsParams.setEditorState.called).to.eq(true);
  });
});