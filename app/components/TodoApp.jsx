var React = require("react");
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import * as actions from 'actions';


export var TodoApp = React.createClass({

  onLogout:function(e){
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  render:function(){
    return (
      <div className="container">
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
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

export default Redux.connect()(TodoApp);
