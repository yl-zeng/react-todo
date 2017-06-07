var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require("react-redux");


var TodoApp = require("TodoApp");
var actions = require("actions");
var store = require("configureStore").configure();
var TodoApi = require("TodoApi");




store.dispatch(actions.startAddTodos());


import 'bootstrap/dist/css/bootstrap.min.css';
// App css
require('applicationStyles');
require('todoStyles');




// localStorage.clear();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
