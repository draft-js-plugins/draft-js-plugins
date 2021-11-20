import {
  EditorState,
  convertFromRaw,
  SelectionState,
  CompositeDecorator,
} from 'draft-js';
import { Map } from 'immutable';
import defaultRegExp from '../../defaultRegExp';
import MentionSuggestionsPortal from '../../MentionSuggestionsPortal';
import mentionSuggestionsStrategy from '../../mentionSuggestionsStrategy';
import getTriggerForMention from '../getTriggerForMention';

function createEditorState(
  text: string,
  offset = 0,
  mentionTriggers = ['@']
): EditorState {
  const contentState = convertFromRaw({
    blocks: [
      {
        text,
        key: 'eai0g',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });
  const editorState = EditorState.createWithContent(
    contentState,
    new CompositeDecorator([
      {
        strategy: mentionSuggestionsStrategy(
          mentionTriggers,
          false,
          defaultRegExp
        ),
        component: MentionSuggestionsPortal,
      },
    ])
  );

  const selection = new SelectionState({
    anchorKey: 'eai0g',
    anchorOffset: offset,
    focusKey: 'eai0g',
    focusOffset: offset,
    hasFocus: true,
  });
  return EditorState.acceptSelection(editorState, selection);
}

describe('test getTriggerForMention', () => {
  const searchMap = Map({ 'eai0g-0-0': 'eai0g-0-0' });

  test.each([
    ['test empty', createEditorState(''), searchMap, ['@'], null],
    [
      'test match',
      createEditorState('@test', 4),
      searchMap,
      ['@'],
      {
        activeOffsetKey: 'eai0g-0-0',
        activeTrigger: '@',
      },
    ],
    [
      'test match no match if cursor is on start',
      createEditorState('@test', 0),
      searchMap,
      ['@'],
      null,
    ],
    [
      'test multitrigger match',
      createEditorState(
        'Type @ or ( to make the mention dropdown appear (',
        49,
        ['@', '(']
      ),
      Map({
        'eai0g-1-0': 'eai0g-1-0',
        'eai0g-3-0': 'eai0g-3-0',
        'eai0g-5-0': 'eai0g-5-0',
      }),
      ['@', '('],
      {
        activeOffsetKey: 'eai0g-5-0',
        activeTrigger: '(',
      },
    ],
  ])('%s', (_description, editorState, searches, trigger, result) => {
    expect(getTriggerForMention(editorState, searches, trigger)).toEqual(
      result
    );
  });
});
