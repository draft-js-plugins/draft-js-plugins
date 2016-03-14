import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// export for http://fb.me/react-devtools
window.React = React;

ReactDOM.render(<App />, document.getElementById('react'));
