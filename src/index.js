import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import App from './components/app';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

setTimeout(() => {
  reactDom.render(
    <h2>...</h2>,
    document.getElementById('root')
  );
}, 4000);