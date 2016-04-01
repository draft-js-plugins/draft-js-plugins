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

      const draftEditor = result.node;
      const plugin = plugins[0];
      draftEditor.props.onUpArrow();
      expect(plugin.onUpArrow).has.been.calledOnce();
      draftEditor.props.onDragEnter();
      expect(plugin.onDragEnter).has.been.calledOnce();
      draftEditor.props.onEscape();
      expect(plugin.onEscape).has.been.calledOnce();
      draftEditor.props.onTab();
      expect(plugin.onTab).has.been.calledOnce();
      draftEditor.props.onChange(editorState);
      expect(plugin.onChange).has.been.calledOnce();
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

      const pluginEditor = result.instance();
      const draftEditor = result.node;
      const plugin = plugins[0];
      draftEditor.props.handleKeyCommand('command');
      expect(plugin.handleKeyCommand).has.been.calledOnce();
      expect(plugin.handleKeyCommand).has.been.calledWith('command', pluginEditor.getEditorState, pluginEditor.onChange);
      draftEditor.props.handlePastedText('command');
      expect(plugin.handlePastedText).has.been.calledOnce();
      expect(plugin.handlePastedText).has.been.calledWith('command', pluginEditor.getEditorState, pluginEditor.onChange);
      draftEditor.props.handleReturn('command');
      expect(plugin.handleReturn).has.been.calledOnce();
      expect(plugin.handleReturn).has.been.calledWith('command', pluginEditor.getEditorState, pluginEditor.onChange);
      draftEditor.props.handleDrop('command');
      expect(plugin.handleDrop).has.been.calledOnce();
      expect(plugin.handleDrop).has.been.calledWith('command', pluginEditor.getEditorState, pluginEditor.onChange);
    });

    it('calls the fn-hooks of the plugin', () => {
      const plugins = [
        {
          blockRendererFn: sinon.spy(),
          keyBindingFn: sinon.spy(),
        },
      ];
      const result = shallow(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ plugins }
        />
      );

      const pluginEditor = result.instance();
      const draftEditor = result.node;
      const plugin = plugins[0];
      draftEditor.props.blockRendererFn('command');
      expect(plugin.blockRendererFn).has.been.calledOnce();
      expect(plugin.blockRendererFn).has.been.calledWith('command', pluginEditor.getEditorState, pluginEditor.onChange);
      draftEditor.props.keyBindingFn('command');
      expect(plugin.keyBindingFn).has.been.calledOnce();
      expect(plugin.keyBindingFn).has.been.calledWith('command', pluginEditor.getEditorState, pluginEditor.onChange);
    });
  });

  describe('passed proxy to DraftEditor', () => {
    let draftEditor;
    let pluginEditor;

    beforeEach(() => {
      const onChange = sinon.spy();
      const editorState = EditorState.createEmpty();
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ [] }
        />
      );
      draftEditor = result.node;
      pluginEditor = result.instance();
    });

    it('focus', () => {
      draftEditor.focus = sinon.spy();
      pluginEditor.focus();
      expect(draftEditor.focus).has.been.calledOnce();
    });

    it('blur', () => {
      draftEditor.blur = sinon.spy();
      pluginEditor.blur();
      expect(draftEditor.blur).has.been.calledOnce();
    });
  });

  describe('custom prop overwrites plugin hook', () => {
    const onChange = sinon.spy();
    let editorState;
    let customHook;

    beforeEach(() => {
      editorState = EditorState.createEmpty();
      customHook = sinon.spy();
    });

    it('onUpArrow', () => {
      const plugin = {
        onUpArrow: sinon.spy(),
      };
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ [plugin] }
          onUpArrow={ customHook }
        />
      );
      const draftEditor = result.node;
      draftEditor.props.onUpArrow();
      expect(plugin.onUpArrow).has.not.been.called();
      expect(customHook).has.been.calledOnce();
    });

    it('blockRendererFn', () => {
      const plugin = {
        blockRendererFn: sinon.spy(),
      };
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ [plugin] }
          blockRendererFn={ customHook }
        />
      );
      const draftEditor = result.node;
      draftEditor.props.blockRendererFn();
      expect(plugin.blockRendererFn).has.not.been.called();
      expect(customHook).has.been.called();
    });
  });
});
