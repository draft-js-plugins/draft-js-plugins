import { List } from 'immutable';
import { CSSProperties } from 'react';
import { EmojiSuggestionsState } from '..';

function getRelativeParent(element: HTMLElement | null): HTMLElement | null {
  if (!element) {
    return null;
  }

  const position = window
    .getComputedStyle(element)
    .getPropertyValue('position');
  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
}

interface RelativeRect {
  scrollLeft: number;
  scrollTop: number;
  left: number;
  top: number;
}

export interface PositionSuggestionsParams {
  decoratorRect: ClientRect;
  popover: Element;
  props: Record<string, unknown>;
  state: EmojiSuggestionsState;
  filteredEmojis: List<string>;
}

export default function positionSuggestions({
  decoratorRect,
  popover,
  state,
  filteredEmojis,
}: PositionSuggestionsParams): CSSProperties {
  const relativeParent = getRelativeParent(popover.parentElement);
  let relativeRect: RelativeRect;

  if (relativeParent) {
    const relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect = {
      scrollLeft: relativeParent.scrollLeft,
      scrollTop: relativeParent.scrollTop,
      left: decoratorRect.left - relativeParentRect.left,
      top: decoratorRect.top - relativeParentRect.top,
    };
  } else {
    relativeRect = {
      scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop: window.pageYOffset || document.documentElement.scrollTop,
      left: decoratorRect.left,
      top: decoratorRect.top,
    };
  }

  const left = relativeRect.left + relativeRect.scrollLeft;
  const top = relativeRect.top + relativeRect.scrollTop;

  let transform;
  let transition;
  if (state.isActive) {
    if (filteredEmojis.size > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: `${left}px`,
    top: `${top}px`,
    transform,
    transformOrigin: '1em 0%',
    transition,
  };
}
