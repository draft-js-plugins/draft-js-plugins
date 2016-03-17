export default (style) => {
  if (typeof style === 'string') {
    return { className: style }
  }

  return { style: style };
}
