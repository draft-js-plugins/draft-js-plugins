// Get selection text's client rectangle
export default function getSelectionRect(selected) {
  if (!selected || !selected.rangeCount || selected.isCollapsed) return null;

  const _rect = selected.getRangeAt(0).getBoundingClientRect();
  let rect = _rect && _rect.top ? _rect : selected.getRangeAt(0).getClientRects()[0];// selected.getRangeAt(0).getBoundingClientRect()
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }

  return rect;
}
