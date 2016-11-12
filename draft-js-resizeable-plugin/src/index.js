import createDecorator from './createDecorator';

const store = {
  getEditorRef: undefined,
  getReadOnly: undefined,
};

export default (config) => ({
  initialize: ({ getEditorRef, getReadOnly }) => {
    store.getReadOnly = getReadOnly;
    store.getEditorRef = getEditorRef;
  },
  decorator: createDecorator({ config, store }),
});
