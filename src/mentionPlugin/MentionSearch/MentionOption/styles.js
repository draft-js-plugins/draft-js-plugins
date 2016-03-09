/* @flow */

export default {
  root: {
    padding: 5,
  },
  focus: {
    // I am copying root styles also to hovered so that during
    // render we do not need to merge the objects to create anew object each time.
    padding: 5,
    backgroundColor: '#DEF0F7',
  },
  text: {
    display: 'inline-block',
    marginLeft: 8,
  },
};
