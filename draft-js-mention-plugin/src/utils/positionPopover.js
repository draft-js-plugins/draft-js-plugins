const positionPopover = (decoratorRect) => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  let width;
  let left;
  if (window.innerWidth <= 480) {
    left = '20px';
    width = `${window.innerWidth - 40}px`;
  } else {
    left = `${decoratorRect.left + scrollLeft}px`;
  }

  return {
    width,
    left,
    top: `${decoratorRect.top + scrollTop}px`,
  };
};

export default positionPopover;
