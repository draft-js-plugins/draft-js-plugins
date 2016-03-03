import React from 'react';
import ReactDOM from 'react-dom';
import UnicornEditor from './components/UnicornEditor';

// export for http://fb.me/react-devtools
window.React = React;

ReactDOM.render(
  <div>
    <h2>Documentation</h2>
    <p>
      Checkout it out <a href="https://github.com/nikgraf/react-unicorn-editor#documentation">on Github</a>.
    </p>
    <UnicornEditor />
  </div>, document.getElementById('react')
);
