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

  describe('with a plugin', () => {
    let onChange;
    let editorState;

    beforeEach(() => {
      editorState = EditorState.createEmpty();
      onChange = sinon.spy();
    });

    it('calls the on-hooks of the plugin', () => {
      const plugins = [
        {
          onUpArrow: sinon.spy(),
          onDragEnter: sinon.spy(),
          onEscape: sinon.spy(),
          onTab: sinon.spy(),
          onChange: sinon.spy(),
        },
      ];
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

    it('calls the handle-hooks of the plugin', () => {
      const plugins = [
        {
          handleKeyCommand: sinon.spy(),
          handlePastedText: sinon.spy(),
          handleReturn: sinon.spy(),
          handleDrop: sinon.spy(),
        },
      ];
      const result = shallow(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ plugins }
        />
      );

      result.node.props.handleKeyCommand();
      expect(plugins[0].handleKeyCommand).has.been.calledOnce();
      result.node.props.handlePastedText();
      expect(plugins[0].handlePastedText).has.been.calledOnce();
      result.node.props.handleReturn();
      expect(plugins[0].handleReturn).has.been.calledOnce();
      result.node.props.handleDrop();
      expect(plugins[0].handleDrop).has.been.calledOnce();
    });
  });
});
