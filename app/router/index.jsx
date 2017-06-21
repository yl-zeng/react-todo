import React from 'react';
import {
  Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import history from "app/history/history.jsx";
import store from "configureStore";
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

var requireLogin = (nextState,replace,next)=>{
  if(!firebase.auth().currentUser){
    console.log("kick out");
    store.dispatch(push('/'));
  }
  next();
};

var redirectIfLoggedIn = (nextState,replace,next)=>{
  var user = firebase.auth().currentUser;
  if(user){
    store.dispatch(push('/courses'));
  }

  next();
};


export default (
  <Router history={history}>
    <div>
      <Route path="/todos" component={TodoApp} onEnter={requireLogin}/>
      <Route exact path="/" component={Login} onEnter={redirectIfLoggedIn}/>
    </div>
  </Router>
);
