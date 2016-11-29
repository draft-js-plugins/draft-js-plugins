import { expect } from 'chai';
import { EditorState } from 'draft-js';
import sinon from 'sinon';
import createVideoPlugin from '../createVideoPlugin';

describe('CreateVideoPlugin without config', () => {
  it('default video plugin handle youtube url', () => {
    const videoPlugin = createVideoPlugin({ autoHandlePastedText: true });
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
    const videoPlugin = createVideoPlugin({ autoHandlePastedText: true });
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
