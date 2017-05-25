var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require("TodoApp");

var actions = require("actions");

var store = require("configureStore").configure();

store.subscribe(()=>{
  console.log("New State: ",store.getState());

});

store.dispatch(actions.addTodo("Clean the yard"));
store.dispatch(actions.setSearchText("yard"));
store.dispatch(actions.toggleShowCompleted());


import 'bootstrap/dist/css/bootstrap.min.css';
// App css
require('applicationStyles');
require('todoStyles');


// localStorage.clear();

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
