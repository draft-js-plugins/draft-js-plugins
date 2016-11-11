import createDecorator from './createDecorator';

const store = {
  getEditorRef: undefined,
};

export default (config) => ({
  initialize: ({ getEditorRef }) => {
    store.getEditorRef = getEditorRef;
  },
  decorator: createDecorator({ config, store }),
});
