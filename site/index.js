import React from 'react';
import ReactDOM from 'react-dom';
import UnicornEditor from './components/UnicornEditor';
import SuperheroEditor from './components/SuperheroEditor';

// export for http://fb.me/react-devtools
window.React = React;

ReactDOM.render(
  <div>
    <h2>Documentation</h2>
    <p>
      Check it out <a href="https://github.com/nikgraf/react-unicorn-editor#documentation">on Github</a>.
    </p>

    <SuperheroEditor />
    <UnicornEditor />

  </div>, document.getElementById('react')
);
