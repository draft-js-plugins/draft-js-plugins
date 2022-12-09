import {PluginFunctions} from '@draft-js-plugins/editor';
import {ContentBlock, ContentState, EditorState, SelectionState} from 'draft-js';
import createFocusPlugin from '../index';

const mockCreateBlockKeyStore = jest.requireActual('../utils/createBlockKeyStore');

jest.mock('linaria');

let mockBlockKeyStore = {
  add: jest.fn(),
  remove: jest.fn(),
  includes: jest.fn(),
  getAll: jest.fn(),
};

jest.mock('../utils/createBlockKeyStore', () => ({
  __esModule: true,
  default: () => mockBlockKeyStore,
}))

describe('FocusPlugin', () => {
  beforeEach(() => {
    mockBlockKeyStore = mockCreateBlockKeyStore.default()
  })

  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
  })

  const createEditorStateFromBlocks = (): EditorState => {
    const block1 = new ContentBlock({
        key: 'non-selected-block',
        text: ' ',
        type: 'atomic'
      })
    const block2 = new ContentBlock({
      key: 'selected-block',
      text: ' ',
      type: 'atomic'
    })
    const contentState = ContentState.createFromBlockArray([block1, block2]);
    const selectionAtEnd = SelectionState.createEmpty(block2.getKey()).merge({
      focusOffset: block2.getText().length,
      anchorOffset: block2.getText().length,
    })

    const editorState =  EditorState.createWithContent(contentState)
    return EditorState.forceSelection(editorState, selectionAtEnd)

  };

  const allowSelectedBlockToBeFocusable = (editorState: EditorState): void => {
    const selectionBlockKey = editorState.getSelection().getAnchorKey()
    const content = editorState.getCurrentContent()
    const blockKey = content.getBlockForKey(selectionBlockKey).getKey()
    mockBlockKeyStore.add(blockKey)
  }

  it('instantiates plugin', () => {
    const focusPlugin = createFocusPlugin();
    expect(focusPlugin).toBeTruthy();
  });


  describe('handleKeyCommand', () => {
    it('should return `not-handled` when the selected block is not focusable', async () => {
      const setEditorState = jest.fn();
      const editorState = createEditorStateFromBlocks()
      const { handleKeyCommand } = createFocusPlugin();

      const result = handleKeyCommand?.(
        'delete',
        editorState,
        Date.now(),
        { setEditorState } as unknown as PluginFunctions
      )

      expect(result).toEqual('not-handled')
    })

    it('should return `not-handled` when the command is not a delete command', async () => {
      const setEditorState = jest.fn();
      const editorState = createEditorStateFromBlocks()
      allowSelectedBlockToBeFocusable(editorState)
      const { handleKeyCommand } = createFocusPlugin();

      const result = handleKeyCommand?.(
        'unknown',
        editorState,
        Date.now(),
        { setEditorState } as unknown as PluginFunctions
      )

      expect(result).toEqual('not-handled')
    });

    it('should should return `handled` when a delete command is fired on a selectable block', async () => {
      const setEditorState = jest.fn();
      const editorState = createEditorStateFromBlocks()
      allowSelectedBlockToBeFocusable(editorState)
      const { handleKeyCommand } = createFocusPlugin();

      const result = handleKeyCommand?.(
        'delete',
        editorState,
        Date.now(),
        { setEditorState } as unknown as PluginFunctions
      )

      expect(result).toEqual('handled')
    });

    it('should remove the selected block from the new state when a delete command is fired', async () => {
      const editorState = createEditorStateFromBlocks()
      allowSelectedBlockToBeFocusable(editorState)
      const { handleKeyCommand } = createFocusPlugin();
      const setEditorState = jest.fn()

      handleKeyCommand?.(
        'delete',
        editorState,
        Date.now(),
        { setEditorState } as unknown as PluginFunctions
      )

      expect(setEditorState).toHaveBeenCalled()
      const nextEditorState = setEditorState.mock.calls[0][0]
      expect(nextEditorState.getCurrentContent().getBlockForKey('selected-block')).toBeUndefined()
    });
  });
});
