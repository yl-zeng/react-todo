var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory} = require('react-router');
var {Provider} = require("react-redux");

var actions = require("actions");
var store = require("configureStore").configure();

import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    hashHistory.push('/todos');
  }else{
    hashHistory.push('/');
  }
});


import 'bootstrap/dist/css/bootstrap.min.css';
// App css
require('applicationStyles');
require('todoStyles');



// localStorage.clear();

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
