var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require("TodoApp");

import 'bootstrap/dist/css/bootstrap.min.css';
// App css
require('applicationStyles');

localStorage.clear();

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
