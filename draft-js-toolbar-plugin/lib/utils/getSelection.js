"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSelection;
// Get browser selection
function getSelection() {
  if (window.getSelection) {
    return window.getSelection();
  } else if (document.getSelection) {
    return document.getSelection();
  } else if (document.selection) {
    return document.selection.createRange().text;
  }return undefined;
}