import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';
import {Video} from 'Video';

export class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      count:1
    };
  }

  onLogin = ()=>{
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  }

  handleEnd = ()=>{
    var nextCount = this.state.count ==4? 1: this.state.count + 1;
    this.setState({
      count:nextCount
    });
  }

  render(){
    return (
      <div className="container login-container">
        <Video onEnd={this.handleEnd} count={this.state.count}/>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 main-window login-window">
            <h1 style={{color:"#f3f3f3",fontSize:"350%"}}>Welcome to Todo!</h1>
            <h3 style={{color:"#f3f3f3"}}>Today will be great</h3>
            <button className="btn btn-primary" style={{marginTop:"10px"}} onClick={this.onLogin}>
                <h4><i className="fa fa-github" aria-hidden="true" style={{paddingRight:"10px"}}/>
                Login with Github</h4>
            </button>
          </div>
        </div>
      </div>
    )
  }
};


export default Redux.connect()(Login);
