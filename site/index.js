import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'unicorn-editor';

// export for http://fb.me/react-devtools
window.React = React;

ReactDOM.render(<div>Hello World! <Editor /></div>, document.getElementById('react'));
