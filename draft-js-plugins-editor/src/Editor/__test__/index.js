import React from 'react';
import { mount, shallow } from 'enzyme';
import PluginEditor from '../index';
import { expect } from 'chai';
import { EditorState } from 'draft-js';
import sinon from 'sinon';

describe('Editor', () => {
  describe('renders the Editor', () => {
    const onChange = sinon.spy();
    let editorState;

    beforeEach(() => {
      editorState = EditorState.createEmpty();
    });

    it('with an empty plugins list provided', () => {
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ [] }
        />
      );
      expect(result).to.have.ref('editor');
    });

    it('without the plugins property provided', () => {
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
        />
      );
      expect(result).to.have.ref('editor');
    });

    it('with a plugin provided', () => {
      const createCustomPlugin = () => ({});
      const customPlugin = createCustomPlugin();
      const plugins = [customPlugin];
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ plugins }
        />
      );
      expect(result).to.have.ref('editor');
    });
  });

  describe('calls the hooks of plugins', () => {
    const onChange = sinon.spy();
    let editorState;
    let plugins;

    beforeEach(() => {
      editorState = EditorState.createEmpty();
      const createCustomPlugin = () => ({
        onUpArrow: sinon.spy(),
        onDragEnter: sinon.spy(),
        onEscape: sinon.spy(),
        onTab: sinon.spy(),
      });
      const customPlugin = createCustomPlugin();
      plugins = [customPlugin];
    });

    it.only('with a plugin provided', () => {
      const result = shallow(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ plugins }
        />
      );

      result.node.props.onUpArrow();
      expect(plugins[0].onUpArrow).has.been.calledOnce();
      result.node.props.onDragEnter();
      expect(plugins[0].onDragEnter).has.been.calledOnce();
      result.node.props.onEscape();
      expect(plugins[0].onEscape).has.been.calledOnce();
      result.node.props.onTab();
      expect(plugins[0].onTab).has.been.calledOnce();
      result.node.props.onChange(editorState);
      expect(plugins[0].onChange).has.been.calledOnce();
    });
  });
});
