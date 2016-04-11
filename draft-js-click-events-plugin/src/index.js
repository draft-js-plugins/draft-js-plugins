import wrapper from './components/click-events-wrapper';

const clickEventPlugin = () => {
  return {
    editorDecorators: [wrapper, wrapper],
  };
};

export default clickEventPlugin;
