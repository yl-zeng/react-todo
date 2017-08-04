import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Video} from 'Video';

import history from "app/history/history.jsx";
import store from "configureStore";

export class Login extends React.Component{

  constructor(props){
    super(props);
  }

  onLogin = ()=>{
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  }

  onGuest = ()=>{
    var {dispatch} = this.props;
    history.push("/guest");
  }


  render(){
    return (
      <div className="container login-container">
        <Video/>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 main-window login-window">
            <h1 style={{color:"#f3f3f3",fontSize:"350%"}}>Welcome to Todo!</h1>
            <h3 style={{color:"#f3f3f3"}}>Today will be great</h3>
            <button className="btn btn-primary" style={{marginTop:"10px",marginRight:"10px"}} onClick={this.onLogin}>
                <h4><i className="fa fa-github" aria-hidden="true" style={{paddingRight:"10px"}}/>
                Login with Github</h4>
            </button>
            <button className="btn btn-danger" style={{marginTop:"10px"}} onClick={this.onGuest}>
                <h4><i className="fa fa-user-o" aria-hidden="true" style={{paddingRight:"10px"}}/>
                Login as Guest</h4>
            </button>
            <hr/>
            <div className="row">
              <div className="col-sm-1 col-sm-offset-4 text-center">
                <p className="fa fa-envelope fa-3x login-icon"></p>
              </div>
              <div className="col-sm-1 text-center">
                <a href="http://yunlin.io/"><p className="fa fa-link fa-3x login-icon"></p></a>
              </div>
              <div className="col-sm-1 text-center">
                <a href="https://www.linkedin.com/in/yunlin-zeng-99a862115/"><p className="fa fa-linkedin fa-3x login-icon"></p></a>
              </div>
              <div className="col-sm-1 text-center">
                <a href="https://github.com/yl-zeng"><p className="fa fa-github fa-3x login-icon"></p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};


export default Redux.connect()(Login);
