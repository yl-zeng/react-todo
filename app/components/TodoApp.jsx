var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");


import TodoList from 'TodoList';
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";



var TodoApp = React.createClass({

  render:function(){
    return (
      <div className="container">
        <h1 className="page-title text-center">Todo App</h1>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 main-window">
            <TodoSearch/>
            <TodoList/>
            <AddTodo/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
