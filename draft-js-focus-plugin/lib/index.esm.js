import {
  ContentBlock,
  genKey,
  BlockMapBuilder,
  EditorState,
  SelectionState,
  Modifier,
} from 'draft-js';
import { List } from 'immutable';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';
import React, { Component } from 'react';
import clsx from 'clsx';

var insertBlockAfterSelection = function insertBlockAfterSelection(
  contentState,
  selectionState,
  newBlock
) {
  var targetKey = selectionState.getStartKey();
  var array = [];
  contentState.getBlockMap().forEach(function(block, blockKey) {
    array.push(block);
    if (blockKey !== targetKey) return;
    array.push(newBlock);
  });
  return contentState.merge({
    blockMap: BlockMapBuilder.createFromArray(array),
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: newBlock.getKey(),
      anchorOffset: newBlock.getLength(),
      focusKey: newBlock.getKey(),
      focusOffset: newBlock.getLength(),
      isBackward: false,
    }),
  });
};

function insertNewLine(editorState) {
  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var newLineBlock = new ContentBlock({
    key: genKey(),
    type: 'unstyled',
    text: '',
    characterList: List(),
  });
  var withNewLine = insertBlockAfterSelection(
    contentState,
    selectionState,
    newLineBlock
  );
  var newContent = withNewLine.merge({
    selectionAfter: withNewLine.getSelectionAfter().set('hasFocus', true),
  });
  return EditorState.push(editorState, newContent, 'insert-fragment');
}

var setSelection = function(getEditorState, setEditorState, mode, event) {
  var editorState = getEditorState();
  var selectionKey = editorState.getSelection().getAnchorKey();
  var newActiveBlock =
    mode === 'up'
      ? editorState.getCurrentContent().getBlockBefore(selectionKey)
      : editorState.getCurrentContent().getBlockAfter(selectionKey);

  if (newActiveBlock && newActiveBlock.get('key') === selectionKey) {
    return;
  }

  if (newActiveBlock) {
    // TODO verify that always a key-0-0 exists
    var offsetKey = DraftOffsetKey.encode(newActiveBlock.getKey(), 0, 0);
    var node = document.querySelectorAll(
      '[data-offset-key="'.concat(offsetKey, '"]')
    )[0]; // set the native selection to the node so the caret is not in the text and
    // the selectionState matches the native selection

    var selection = window.getSelection();
    var range = document.createRange();
    range.setStart(node, 0);
    range.setEnd(node, 0);
    selection.removeAllRanges();
    selection.addRange(range);
    var offset = mode === 'up' ? newActiveBlock.getLength() : 0;
    event.preventDefault();
    setEditorState(
      EditorState.forceSelection(
        editorState,
        new SelectionState({
          anchorKey: newActiveBlock.getKey(),
          anchorOffset: offset,
          focusKey: newActiveBlock.getKey(),
          focusOffset: offset,
          isBackward: false,
        })
      )
    );
  }
};

var setSelectionToBlock = function(
  getEditorState,
  setEditorState,
  newActiveBlock
) {
  var editorState = getEditorState(); // TODO verify that always a key-0-0 exists

  var offsetKey = DraftOffsetKey.encode(newActiveBlock.getKey(), 0, 0);
  var node = document.querySelectorAll(
    '[data-offset-key="'.concat(offsetKey, '"]')
  )[0]; // set the native selection to the node so the caret is not in the text and
  // the selectionState matches the native selection

  var selection = window.getSelection();
  var range = document.createRange();
  range.setStart(node, 0);
  range.setEnd(node, 0);
  selection.removeAllRanges();
  selection.addRange(range);
  setEditorState(
    EditorState.forceSelection(
      editorState,
      new SelectionState({
        anchorKey: newActiveBlock.getKey(),
        anchorOffset: 0,
        focusKey: newActiveBlock.getKey(),
        focusOffset: 0,
        isBackward: false,
      })
    )
  );
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

var getDisplayName = function getDisplayName(WrappedComponent) {
  var component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

var createDecorator = function(_ref) {
  var theme = _ref.theme,
    blockKeyStore = _ref.blockKeyStore;
  return function(WrappedComponent) {
    var _class, _temp;

    return (
      (_temp = _class =
        /*#__PURE__*/
        (function(_Component) {
          _inherits(BlockFocusDecorator, _Component);

          function BlockFocusDecorator(props) {
            var _this;

            _classCallCheck(this, BlockFocusDecorator);

            _this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(BlockFocusDecorator).call(this, props)
            );

            _defineProperty(_assertThisInitialized(_this), 'onClick', function(
              evt
            ) {
              evt.preventDefault();

              if (!_this.props.blockProps.isFocused) {
                _this.props.blockProps.setFocusToBlock();
              }
            });

            blockKeyStore.add(props.block.getKey());
            return _this;
          }

          _createClass(BlockFocusDecorator, [
            {
              key: 'componentWillUnmount',
              value: function componentWillUnmount() {
                blockKeyStore.remove(this.props.block.getKey());
              },
            },
            {
              key: 'render',
              value: function render() {
                var _this$props = this.props,
                  blockProps = _this$props.blockProps,
                  className = _this$props.className;
                var isFocused = blockProps.isFocused;
                var combinedClassName = isFocused
                  ? clsx(className, theme.focused)
                  : clsx(className, theme.unfocused);
                return React.createElement(
                  WrappedComponent,
                  _extends({}, this.props, {
                    onClick: this.onClick,
                    className: combinedClassName,
                  })
                );
              },
            },
          ]);

          return BlockFocusDecorator;
        })(Component)),
      _defineProperty(
        _class,
        'displayName',
        'BlockFocus('.concat(getDisplayName(WrappedComponent), ')')
      ),
      _defineProperty(
        _class,
        'WrappedComponent',
        WrappedComponent.WrappedComponent || WrappedComponent
      ),
      _temp
    );
  };
};

var createBlockKeyStore = function createBlockKeyStore() {
  var keys = List();

  var add = function add(key) {
    keys = keys.push(key);
    return keys;
  };

  var remove = function remove(key) {
    keys = keys.filter(function(item) {
      return item !== key;
    });
    return keys;
  };

  return {
    add: add,
    remove: remove,
    includes: function includes(key) {
      return keys.includes(key);
    },
    getAll: function getAll() {
      return keys;
    },
  };
};

var getBlockMapKeys = function(contentState, startKey, endKey) {
  var blockMapKeys = contentState.getBlockMap().keySeq();
  return blockMapKeys
    .skipUntil(function(key) {
      return key === startKey;
    })
    .takeUntil(function(key) {
      return key === endKey;
    })
    .concat([endKey]);
};

var getSelectedBlocksMapKeys = function(editorState) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  return getBlockMapKeys(
    contentState,
    selectionState.getStartKey(),
    selectionState.getEndKey()
  );
};

var blockInSelection = function(editorState, blockKey) {
  var selectedBlocksKeys = getSelectedBlocksMapKeys(editorState);
  return selectedBlocksKeys.includes(blockKey);
};

/* NOT USED at the moment, but might be valuable if we want to fix atomic block behaviour */

function removeBlock(editorState, blockKey) {
  var content = editorState.getCurrentContent();
  var beforeKey = content.getKeyBefore(blockKey);
  var beforeBlock = content.getBlockForKey(beforeKey); // Note: if the focused block is the first block then it is reduced to an
  // unstyled block with no character

  if (beforeBlock === undefined) {
    var _targetRange = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 1,
    }); // change the blocktype and remove the characterList entry with the sticker

    content = Modifier.removeRange(content, _targetRange, 'backward');
    content = Modifier.setBlockType(content, _targetRange, 'unstyled');

    var _newState = EditorState.push(editorState, content, 'remove-block'); // force to new selection

    var _newSelection = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 0,
    });

    return EditorState.forceSelection(_newState, _newSelection);
  }

  var targetRange = new SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    focusKey: blockKey,
    focusOffset: 1,
  });
  content = Modifier.removeRange(content, targetRange, 'backward');
  var newState = EditorState.push(editorState, content, 'remove-block'); // force to new selection

  var newSelection = new SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    focusKey: beforeKey,
    focusOffset: beforeBlock.getLength(),
  });
  return EditorState.forceSelection(newState, newSelection);
}

var defaultTheme = {
  unfocused: 'uihu1q3',
  focused: 'f3bms4w',
};

var focusableBlockIsSelected = function focusableBlockIsSelected(
  editorState,
  blockKeyStore
) {
  var selection = editorState.getSelection();

  if (selection.getAnchorKey() !== selection.getFocusKey()) {
    return false;
  }

  var content = editorState.getCurrentContent();
  var block = content.getBlockForKey(selection.getAnchorKey());
  return blockKeyStore.includes(block.getKey());
};

var deleteCommands = [
  'backspace',
  'backspace-word',
  'backspace-to-start-of-line',
  'delete',
  'delete-word',
  'delete-to-end-of-block',
];
var index = function() {
  var config =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var blockKeyStore = createBlockKeyStore();
  var theme = config.theme ? config.theme : defaultTheme;
  var lastSelection;
  var lastContentState;
  return {
    handleReturn: function handleReturn(event, editorState, _ref) {
      var setEditorState = _ref.setEditorState;

      // if a focusable block is selected then overwrite new line behavior to custom
      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        setEditorState(insertNewLine(editorState));
        return 'handled';
      }

      return 'not-handled';
    },
    handleKeyCommand: function handleKeyCommand(
      command,
      editorState,
      eventTimeStamp,
      _ref2
    ) {
      var setEditorState = _ref2.setEditorState;

      if (
        deleteCommands.includes(command) &&
        focusableBlockIsSelected(editorState, blockKeyStore)
      ) {
        var key = editorState.getSelection().getStartKey();
        var newEditorState = removeBlock(editorState, key);

        if (newEditorState !== editorState) {
          setEditorState(newEditorState);
          return 'handled';
        }
      }

      return 'not-handled';
    },
    onChange: function onChange(editorState) {
      // in case the content changed there is no need to re-render blockRendererFn
      // since if a block was added it will be rendered anyway and if it was text
      // then the change was not a pure selection change
      var contentState = editorState.getCurrentContent();

      if (!contentState.equals(lastContentState)) {
        lastContentState = contentState;
        return editorState;
      }

      lastContentState = contentState; // if the selection didn't change there is no need to re-render

      var selection = editorState.getSelection();

      if (lastSelection && selection.equals(lastSelection)) {
        lastSelection = editorState.getSelection();
        return editorState;
      } // Note: Only if the previous or current selection contained a focusableBlock a re-render is needed.

      var focusableBlockKeys = blockKeyStore.getAll();

      if (lastSelection) {
        var lastBlockMapKeys = getBlockMapKeys(
          contentState,
          lastSelection.getStartKey(),
          lastSelection.getEndKey()
        );

        if (
          lastBlockMapKeys.some(function(key) {
            return focusableBlockKeys.includes(key);
          })
        ) {
          lastSelection = selection; // By forcing the selection the editor will trigger the blockRendererFn which is
          // necessary for the blockProps containing isFocus to be passed down again.

          return EditorState.forceSelection(
            editorState,
            editorState.getSelection()
          );
        }
      }

      var currentBlockMapKeys = getBlockMapKeys(
        contentState,
        selection.getStartKey(),
        selection.getEndKey()
      );

      if (
        currentBlockMapKeys.some(function(key) {
          return focusableBlockKeys.includes(key);
        })
      ) {
        lastSelection = selection; // By forcing the selection the editor will trigger the blockRendererFn which is
        // necessary for the blockProps containing isFocus to be passed down again.

        return EditorState.forceSelection(
          editorState,
          editorState.getSelection()
        );
      }

      return editorState;
    },
    // TODO edgecase: if one block is selected and the user wants to expand the selection using the shift key
    keyBindingFn: function keyBindingFn(evt, _ref3) {
      var getEditorState = _ref3.getEditorState,
        setEditorState = _ref3.setEditorState;
      var editorState = getEditorState(); // TODO match by entitiy instead of block type

      if (focusableBlockIsSelected(editorState, blockKeyStore)) {
        // arrow left
        if (evt.keyCode === 37) {
          setSelection(getEditorState, setEditorState, 'up', evt);
        } // arrow right

        if (evt.keyCode === 39) {
          setSelection(getEditorState, setEditorState, 'down', evt);
        } // arrow up

        if (evt.keyCode === 38) {
          setSelection(getEditorState, setEditorState, 'up', event);
        } // arrow down

        if (evt.keyCode === 40) {
          setSelection(getEditorState, setEditorState, 'down', event);
          return;
        }
      } // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.

      if (evt.shiftKey) {
        return;
      } // arrow left

      if (evt.keyCode === 37) {
        // Covering the case to select the before block
        var selection = editorState.getSelection();
        var selectionKey = selection.getAnchorKey();
        var beforeBlock = editorState
          .getCurrentContent()
          .getBlockBefore(selectionKey); // only if the selection caret is a the left most position

        if (
          beforeBlock &&
          selection.getAnchorOffset() === 0 &&
          blockKeyStore.includes(beforeBlock.getKey())
        ) {
          setSelection(getEditorState, setEditorState, 'up', evt);
        }
      } // arrow right

      if (evt.keyCode === 39) {
        // Covering the case to select the after block
        var _selection = editorState.getSelection();

        var _selectionKey = _selection.getFocusKey();

        var currentBlock = editorState
          .getCurrentContent()
          .getBlockForKey(_selectionKey);
        var afterBlock = editorState
          .getCurrentContent()
          .getBlockAfter(_selectionKey);

        var notAtomicAndLastPost =
          currentBlock.getType() !== 'atomic' &&
          currentBlock.getLength() === _selection.getFocusOffset();

        if (
          afterBlock &&
          notAtomicAndLastPost &&
          blockKeyStore.includes(afterBlock.getKey())
        ) {
          setSelection(getEditorState, setEditorState, 'down', evt);
        }
      } // arrow up

      if (evt.keyCode === 38) {
        // Covering the case to select the before block with arrow up
        var _selectionKey2 = editorState.getSelection().getAnchorKey();

        var _beforeBlock = editorState
          .getCurrentContent()
          .getBlockBefore(_selectionKey2);

        if (_beforeBlock && blockKeyStore.includes(_beforeBlock.getKey())) {
          setSelection(getEditorState, setEditorState, 'up', event);
        }
      } // arrow down

      if (evt.keyCode === 40) {
        // Covering the case to select the after block with arrow down
        var _selectionKey3 = editorState.getSelection().getAnchorKey();

        var _afterBlock = editorState
          .getCurrentContent()
          .getBlockAfter(_selectionKey3);

        if (_afterBlock && blockKeyStore.includes(_afterBlock.getKey())) {
          setSelection(getEditorState, setEditorState, 'down', event);
        }
      }
    },
    // Wrap all block-types in block-focus decorator
    blockRendererFn: function blockRendererFn(contentBlock, _ref4) {
      var getEditorState = _ref4.getEditorState,
        setEditorState = _ref4.setEditorState;

      // This makes it mandatory to have atomic blocks for focus but also improves performance
      // since all the selection checks are not necessary.
      // In case there is a use-case where focus makes sense for none atomic blocks we can add it
      // in the future.
      if (contentBlock.getType() !== 'atomic') {
        return undefined;
      }

      var editorState = getEditorState();
      var isFocused = blockInSelection(editorState, contentBlock.getKey());
      return {
        props: {
          isFocused: isFocused,
          isCollapsedSelection: editorState.getSelection().isCollapsed(),
          setFocusToBlock: function setFocusToBlock() {
            setSelectionToBlock(getEditorState, setEditorState, contentBlock);
          },
        },
      };
    },
    decorator: createDecorator({
      theme: theme,
      blockKeyStore: blockKeyStore,
    }),
  };
};

export default index;
