const positionPopover = ({ decoratorRect, state }) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  let width;
  let left;
  let transform;
  let transformOrigin;
  if (window.innerWidth <= 480) {
    left = '20px';
    width = `${window.innerWidth - 40}px`;
  } else {
    left = `${decoratorRect.left + scrollLeft}px`;
  }

  if (state.isActive) {
    transform = 'scaleY(1)';
    transformOrigin = '50% 0%';
  }

  return {
    width,
    left,
    top: `${decoratorRect.top + scrollTop}px`,
    transform,
    transformOrigin,
    transition: 'all 0.25s cubic-bezier(.3,1.2,.2,1)',
  };
};

export default positionPopover;
