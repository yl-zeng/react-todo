var React = require("react");
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import * as actions from 'actions';
import firebase from 'app/firebase/';


export var TodoApp = React.createClass({

  onLogout:function(e){
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },

  componentWillMount:function(){
    var {dispatch} = this.props;
    dispatch(actions.startAddTodos());
    console.log("email: ",firebase.auth().currentUser.email);
  },

  render:function(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-sm-offset-10 dashboard">
            <h5>{`${firebase.auth().currentUser.email}`}</h5>
            <a href="#" onClick={this.onLogout}><button className="btn btn-primary btn-block">Logout</button></a>
          </div>
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
