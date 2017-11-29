// import react lib
import React from 'react';

// puts react code onto browser
import ReactDOM from 'react-dom';

// import App Component from current directory .
import App from './App';

// where shall we render the element?
// use the div in public/index.html with id="root"
ReactDOM.render(
  <App></App>, document.getElementById('root')
);
