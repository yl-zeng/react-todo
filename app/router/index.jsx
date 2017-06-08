import React from 'react';
import {Route,Router,IndexRoute,hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

var requireLogin = (nextState,replace,next)=>{
  if(!firebase.auth().currentUser){
    console.log("kick out");
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState,replace,next)=>{
  var user = firebase.auth().currentUser;
  if(user){
    replace('/todos');
  }

  next();
};


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
