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

    it('and by default adds the defaultKeyBindings plugin', () => {
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
        />
      );
      const pluginEditor = result.instance();
      expect(pluginEditor.resolvePlugins()[0]).to.include.keys('keyBindingFn');
    });

    it('without the defaultKeyBindings plugin if deactivated', () => {
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          defaultKeyBindings={ false }
        />
      );
      const pluginEditor = result.instance();
      expect(pluginEditor.resolvePlugins()).to.have.lengthOf(0);
    });
  });

  describe('with plugins', () => {
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

      // is called twice since componentWillMount injects the decorators and calls onChange again
      expect(plugin.onChange).has.been.calledTwice();
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
      const expectedSecondArgument = {
        getEditorState: pluginEditor.getEditorState,
        setEditorState: pluginEditor.onChange,
      };
      draftEditor.props.handleKeyCommand('command');
      expect(plugin.handleKeyCommand).has.been.calledOnce();
      expect(plugin.handleKeyCommand).has.been.calledWith('command', expectedSecondArgument);
      draftEditor.props.handlePastedText('command');
      expect(plugin.handlePastedText).has.been.calledOnce();
      expect(plugin.handlePastedText).has.been.calledWith('command', expectedSecondArgument);
      draftEditor.props.handleReturn('command');
      expect(plugin.handleReturn).has.been.calledOnce();
      expect(plugin.handleReturn).has.been.calledWith('command', expectedSecondArgument);
      draftEditor.props.handleDrop('command');
      expect(plugin.handleDrop).has.been.calledOnce();
      expect(plugin.handleDrop).has.been.calledWith('command', expectedSecondArgument);
    });

    it('calls the handle- and on-hooks of the first plugin and not the second in case it was handeled', () => {
      const plugins = [
        {
          handleKeyCommand: sinon.stub().returns(true),
          onUpArrow: sinon.stub().returns(true),
        },
        {
          handleKeyCommand: sinon.spy(),
          onUpArrow: sinon.spy(),
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
      draftEditor.props.handleKeyCommand('command');
      expect(plugins[0].handleKeyCommand).has.been.calledOnce();
      expect(plugins[1].handleKeyCommand).has.not.been.called();

      draftEditor.props.onUpArrow();
      expect(plugins[0].onUpArrow).has.been.calledOnce();
      expect(plugins[1].onUpArrow).has.not.been.called();
    });

    it('calls the handle- and on-hooks of all plugins in case none handeles the command', () => {
      const plugins = [
        {
          handleKeyCommand: sinon.spy(),
          onUpArrow: sinon.spy(),
        },
        {
          handleKeyCommand: sinon.spy(),
          onUpArrow: sinon.spy(),
        },
        {
          handleKeyCommand: sinon.spy(),
          onUpArrow: sinon.spy(),
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
      draftEditor.props.handleKeyCommand('command');
      expect(plugins[0].handleKeyCommand).has.been.calledOnce();
      expect(plugins[1].handleKeyCommand).has.been.calledOnce();
      expect(plugins[2].handleKeyCommand).has.been.calledOnce();

      draftEditor.props.onUpArrow();
      expect(plugins[0].onUpArrow).has.been.calledOnce();
      expect(plugins[1].onUpArrow).has.been.calledOnce();
      expect(plugins[2].onUpArrow).has.been.calledOnce();
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
      const expectedSecondArgument = {
        getEditorState: pluginEditor.getEditorState,
        setEditorState: pluginEditor.onChange,
      };
      draftEditor.props.blockRendererFn('command');
      expect(plugin.blockRendererFn).has.been.calledOnce();
      expect(plugin.blockRendererFn).has.been.calledWith('command', expectedSecondArgument);
      draftEditor.props.keyBindingFn('command');
      expect(plugin.keyBindingFn).has.been.calledOnce();
      expect(plugin.keyBindingFn).has.been.calledWith('command', expectedSecondArgument);
    });

    it('combines the customStyleMaps from all plugins', () => {
      const plugins = [
        {
          customStyleMap: {
            orange: {
              color: 'rgba(255, 127, 0, 1.0)',
            },
          },
        },
        {
          customStyleMap: {
            yellow: {
              color: 'rgba(180, 180, 0, 1.0)',
            },
          },
        },
      ];
      const result = mount(
        <PluginEditor
          editorState={ editorState }
          onChange={ onChange }
          plugins={ plugins }
        />
      );
      const expected = {
        orange: {
          color: 'rgba(255, 127, 0, 1.0)',
        },
        yellow: {
          color: 'rgba(180, 180, 0, 1.0)',
        },
      };
      const pluginEditor = result.instance();
      expect(pluginEditor.resolveCustomStyleMap()).to.deep.equal(expected);
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
