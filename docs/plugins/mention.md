# Mention Plugin

Mentions for everyone! This plugin allows the user to choose an entry from a list. After selection an entry the search text will be replace with the selected entity. The list of suggestions mentions needs to contain at least a name to display. If desired a link and/or an avatar image can be provided.


### Getting Started

1. First, install the plguins editor as well as the plugin:
  ```bash
  npm install draft-js-plugins-editor@beta --save
  npm install draft-js-mention-plugin@beta --save
  ```

2. Then create a plugin instance *You'll need a new plugin instance per editor*
  ```javascript
  import createMentionPlugin from 'draft-js-mention-plugin';
  const mentionPlugin = createMentionPlugin() // options are optional
  ```

3. Now pass the plugin to the PluginEditor via props and mount the Plugin Component below the editor
  ```javascript
  render() {
    return <div>
      <Editor
        plugins={[mentionPlugin]}
        onChange={this.onChange}
      />
      <MentionSuggestions suggestions={this.state.suggestions}/>
    </div>
  }
  ```


  ```js
  import React, { Component } from 'react';
  import { EditorState }
  import Editor from 'draft-js-plugins-editor';
  import createMentionPlugin from 'draft-jsmention-plugin';

  class MyEditor extends Component {
    render() {

    }
  }
  ```

 

### Importing the default styles

<iframe src="https://codesandbox.io/embed/MjG72jX2R?hidenavigation=1" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## Escape Behaviour

While the suggestion popover is open, the user can close it by pressing ESC. This will be stored for as long as the the selection stays inside the word that triggered the search. After the selection left this word once the escape behaviour will be reset. The suggestions will appear again once the user selects the word that that triggered the selection.

