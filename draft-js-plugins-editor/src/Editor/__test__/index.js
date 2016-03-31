import React from 'react';
import { mount } from 'enzyme';
import PluginEditor from '../index';
import { expect } from 'chai';
import { EditorState } from 'draft-js';

describe('Editor', () => {
  describe('renders the Editor ', () => {
    const onChange = () => undefined;
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
});
