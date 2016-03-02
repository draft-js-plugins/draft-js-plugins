import React from 'react';
import ReactDOM from 'react-dom';
import UnicornEditor from './components/UnicornEditor';

// export for http://fb.me/react-devtools
window.React = React;

ReactDOM.render(
  <div>
    <UnicornEditor />
  </div>, document.getElementById('react')
);
