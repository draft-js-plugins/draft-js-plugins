# DraftJS Sidebar Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin turns hyperlinks in the text to highlighted, clickable anchor tags!
This plugin gives you a customizable sidebar on the left of the editor.

You can plug in 3 types of action buttons:
### Basic Action
On click, component will call this.props.add() and insert an atomic block with whatever Entity you return.
### Text Action
On enter key pressed, component will call this.props.add(UserInputValue) and insert an atomic block with whatever Entity you return.
### File Action
On click, component will open a file Dialog.<br />
On file chosen, component will call this.props.add(file) and insert an atomic block with whatever Entity you return.


## Usage

```js
import createSidebarPlugin, { INPUT_TYPES } from 'draft-js-sidebar-plugin';

const actions = [{
  name: 'insert-unicorne',
  inputType: INPUT_TYPES.BASIC,
  icon: 'insert-unicorne',
  add: () =>  Entity.create('IMAGE', 'IMMUTABLE', { src: '/images/unicorn-1.png' }),
},
// comes with a built in EMBED block renderer
{ 
  name: 'insert-twitter',
  inputType: INPUT_TYPES.TEXT,
  placeholder: 'insert tweet link',
  icon: 'insert-twitter',
  add: (tweetUrl) => 
    callTheTwitterApi(tweetUrl)
      .then((data) => Entity.create('EMBED', 'IMMUTABLE', data),
},
{ //FILE NOT DONE YET
  name: 'insert-image',
  inputType: INPUT_TYPES.FILE,
  icon: 'insert-image',
  add: (file) => 
    uploadImage(file)
      .then((data) => Entity.create('IMAGE', 'IMMUTABLE', { src: data.url })),
}];


const sidebarPlugin = createSidebarPlugin({ actions });
const { renderSidebar } = sidebarPlugin;
const plugins = [sidebarPlugin];

[...]

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
        </div>
        {renderSidebar()}
      </div>
    );
  }

```
