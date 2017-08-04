var React = require("react");
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from "AddTodo";
import TodoSearch from "TodoSearch";
import * as actions from 'actions';
import firebase from 'app/firebase/';
import store from "configureStore";

import history from "app/history/history.jsx";

export class TodoApp extends React.Component{

  constructor(props){
    super(props);
  }

  onLogout= (e)=>{
    var {dispatch} = this.props;
    e.preventDefault();

    if(firebase.auth().currentUser){
      dispatch(actions.startLogout());
    }else{
      history.push("/");
    }
  }

  componentWillMount(){
    var {dispatch} = this.props;
    dispatch(actions.startAddTodos());
    console.log("email: ",firebase.auth().currentUser?firebase.auth().currentUser.email:"guest@yunlin.io");
  }

  render(){
    return (
      <div className="container page">
        <div className="row">
          <div className="col-sm-2 col-sm-offset-10 dashboard">
            <h5>{`${firebase.auth().currentUser?firebase.auth().currentUser.email:"guest@yunlin.io"}`}</h5>
            <a href="#" onClick={this.onLogout}><button className="btn btn-primary btn-block">Logout</button></a>
          </div>
        </div>
        <h1 className="page-title text-center" style={{color:"#ffffff",fontSize:"350%"}}>Todo App</h1>
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
};

export default Redux.connect()(TodoApp);
