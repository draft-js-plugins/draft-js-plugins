import { Entity } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import Sidebar from './Components/Sidebar';
import InputBlock from './Components/InputBlock';
import EmbedIframe from './Components/EmbedIframe';
import addButtonImg from './assets/addCircleMD.svg';

export { INPUT_TYPES } from './Actions';

const createSidebarPlugin = (userConfig) => {
  const defaultConfig = {
    actions: [],
    emptyLineOnly: true,
    icon: addButtonImg,
  };

  const config = Object.assign(defaultConfig, userConfig);

  const myBlockRenderer = (contentBlock) => {
    const type = contentBlock.getType();

    if (type !== 'atomic') {
      return;
    }

    const entityKey = contentBlock.getEntityAt(0);
    if (!entityKey) {
      return;
    }

    const entity = Entity.get(entityKey);

    // eslint-disable-next-line default-case
    switch (entity.getType()) {
      case 'EMBED': {
        // eslint-disable-next-line consistent-return
        return {
          component: EmbedIframe,
          editable: false,
        };
      }

      case 'TEXT-INPUT': {
        // eslint-disable-next-line consistent-return
        return {
          component: InputBlock,
          editable: false,
        };
      }
    }
  };


  return {
    Sidebar: decorateComponentWithProps(Sidebar, {
      actions: config.actions,
      emptyLineOnly: config.emptyLineOnly,
      icon: config.icon,
    }),
    blockRendererFn: myBlockRenderer
  };
};

export default createSidebarPlugin;
