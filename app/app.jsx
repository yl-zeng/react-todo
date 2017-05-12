var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require("TodoApp");

// Load foundation
$(document).foundation();

// App css
require('applicationStyles')

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
