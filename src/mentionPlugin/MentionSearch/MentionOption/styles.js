/* @flow */

export default {
  root: {
    borderBottom: '1px solid #ddd',
    padding: 5,
  },
  focus: {
    // I am copying root styles also to hovered so that during
    // render we do not need to merge the objects to create anew object each time.
    borderBottom: '1px solid #ddd',
    padding: 5,
    backgroundColor: '#F5E5F9',
  },
  text: {
    display: 'inline-block',
    marginLeft: 8,
  },
};
