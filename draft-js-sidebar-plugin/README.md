# DraftJS Sidebar Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin gives you a customizable sidebar on the left of the editor.

You can plug in 3 types of action buttons:
### Basic Action
On click, component will call this.props.add() and insert an atomic block with whatever Entity you return.
```
const action = {
  name: 'insert-unicorne', // unique name
  inputType: INPUT_TYPES.BASIC, // type of action
  icon: myImage, // image in the sidebar
  /* the action that will be called on button click  (can be a promise) */
  add: () =>  Entity.create('IMAGE', 'IMMUTABLE', { src: '/images/unicorn-1.png' }),
}
```
### Text Action
On enter key pressed, component will call this.props.add(UserInputValue) and insert an atomic block with whatever Entity you return.
```
const action = {
  name: 'insert-text', // unique name
  inputType: INPUT_TYPES.BASIC, // type of action
  icon: myImage, // image in the sidebar
  /* the action that will be called on button click  (can be a promise) */
  add: (tweetUrl) => 
    callTheTwitterApi(tweetUrl)
      .then((data) => Entity.create('EMBED', 'IMMUTABLE', data),
}
```
### File Action
On click, component will open a file Dialog.<br />
On file chosen, component will call this.props.add(file) and insert an atomic block with whatever Entity you return.
```
const action = {
  name: 'insert-text', // unique name
  inputType: INPUT_TYPES.BASIC, // type of action
  icon: myImage, // image in the sidebar
  /* 
    the action that will be called when user has chosen a file  (can be a promise)
    it receives an object containing: {
        fileReader,
        file,
    }
   */
  add: (file) => 
    uploadImage(data.fileReader.result)
      .then((result) => Entity.create('IMAGE', 'IMMUTABLE', { src: result.src })),
}
```

## Global Config
```
const defaultConfig = {
    actions: [], // a list of actions
    emptyLineOnly: true, // if the sidebar should only appear on empty lines
    icon: myImage, // the image used for the button that opens the sidebar
  };
```

## Important
1) you MUST wrap the editor and the sidebar in a div with position: relative 
2) you have to proxy the getPluginMethods to the sidebar props (cf: examples)

## Usage

```js
import createSidebarPlugin, { INPUT_TYPES } from 'draft-js-sidebar-plugin';

const actions = [{
  name: 'insert-unicorne',
  inputType: INPUT_TYPES.BASIC,
  icon: { img: myImage.png },
  add: () =>  Entity.create('IMAGE', 'IMMUTABLE', { src: '/images/unicorn-1.png' }),
},
// comes with a built in EMBED block renderer
{ 
  name: 'insert-twitter',
  inputType: INPUT_TYPES.TEXT,
  placeholder: 'insert tweet link',
  icon: { img: myImage.svg },
  add: (tweetUrl) => 
    callTheTwitterApi(tweetUrl)
      .then((data) => Entity.create('EMBED', 'IMMUTABLE', data),
},
{ 
  name: 'insert-image',
  inputType: INPUT_TYPES.FILE,
  icon: { img: myImage.jpeg },
  add: (file) => 
    uploadImage(file)
      .then((data) => Entity.create('IMAGE', 'IMMUTABLE', { src: data.fileReader.result })),
}];

const Image = ({ block }) => {
  const data = Entity.get(block.getEntityAt(0)).getData();
  return (
      <img src={data.src} />
  );
}

const sidebarPlugin = createSidebarPlugin({ actions });
const { Sidebar } = sidebarPlugin;
const plugins = [sidebarPlugin];



[...]

  getPluginMethods = () => {
    if (!this.editor) {
      return {};
    }
    return this.editor.getPluginMethods();
  }

  myBlockRenderer = (contentBlock) => {
    const type = contentBlock.getType();

    if (type !== 'atomic') {
      return;
    }

    const entityKey = contentBlock.getEntityAt(0);
    if (!entityKey) {
      return;
    }

    const entity = Entity.get(entityKey);

    switch(entity.getType()) {
      case 'IMAGE': {
        return {
          component: Image,
          editable: false,
        };
      }
    }
  }
  
  render() {
    return (
  <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }} ref={(container) => { this.container = container; }}>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
            blockRendererFn={this.myBlockRenderer}
          />
        </div>
        <Sidebar
          editorState={this.state.editorState}
          getPluginMethods={this.getPluginMethods}
          container={this.container}
        />
      </div>
    );
  }

```
