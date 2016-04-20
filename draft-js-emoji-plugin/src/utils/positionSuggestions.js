const positionSuggestions = ({ decoratorRect, state, filteredEmojis }) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  let width;
  let left;
  let transform;
  let transition;
  if (window.innerWidth <= 480) {
    left = '20px';
    width = `${window.innerWidth - 40}px`;
  } else {
    left = `${decoratorRect.left + scrollLeft}px`;
  }

  if (state.isActive & filteredEmojis.size > 0) {
    transform = 'scale(1)';
    transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
  } else if (state.isActive) {
    transform = 'scale(0)';
    transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
  }

  return {
    width,
    left,
    top: `${decoratorRect.top + scrollTop}px`,
    transform,
    transformOrigin: '1em 0%',
    transition,
  };
};

export default positionSuggestions;
