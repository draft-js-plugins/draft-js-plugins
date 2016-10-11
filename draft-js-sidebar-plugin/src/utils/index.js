// https://github.com/facebook/draft-js/issues/45#issuecomment-189800287
const getSelectedBlockElement = () => {
  var selection = window.getSelection()
  if (selection.rangeCount == 0) return null
  var node = selection.getRangeAt(0).startContainer
  do {
    if (node.getAttribute && node.getAttribute('data-block') == 'true')
      return node
    node = node.parentNode
  } while (node != null)
  return null
};

export default getSelectedBlockElement;