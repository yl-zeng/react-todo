import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';


export var Login = React.createClass({

  onLogin:function(){
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },

  render: function(){
    return (
      <div className="container">
        <h1 className="page-title text-center">Todo App</h1>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 main-window login-window">
            <h3>Login</h3>
            <p>Login with Github account below</p>
            <button className="btn btn-primary" onClick={this.onLogin}>Login with Github</button>
          </div>
        </div>
      </div>
    )
  }
});


export default Redux.connect()(Login);
