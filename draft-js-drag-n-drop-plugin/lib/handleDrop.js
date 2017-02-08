'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _moveBlock = require('./modifiers/moveBlock');

var _moveBlock2 = _interopRequireDefault(_moveBlock);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$onDrop = _ref.onDrop,
      onDrop = _ref$onDrop === undefined ? _moveBlock2.default : _ref$onDrop;
  return function (selection, dataTransfer, isInternal, _ref2) {
    var getEditorState = _ref2.getEditorState,
        setEditorState = _ref2.setEditorState;

    var editorState = getEditorState();

    if (isInternal !== 'internal') {
      // NOTE: change to 'not-handled' once draft-js-plugin-editor is upgraded
      return false;
    }

    // Get data 'text' (anything else won't move the cursor) and expecting kind of data (text/key)
    var raw = dataTransfer.data.getData('text');

    var _ref3 = raw ? raw.split(':') : [],
        _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        blockKey = _ref4[1];

    // Existing block dropped


    if (key !== _constants.DRAFTJS_BLOCK_KEY) {
      // NOTE: change to 'not-handled' once draft-js-plugin-editor is upgraded
      return false;
    }

    setEditorState(onDrop(editorState, selection, blockKey));

    // NOTE: change to 'handled' once draft-js-plugin-editor is upgraded
    return true;
  };
};