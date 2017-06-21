var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");
import firebase from "firebase";

export class AddTodo extends React.Component{
  constructor(props){
    super(props);
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    var {dispatch} = this.props;

    var email = firebase.auth().currentUser.email.replace(".","+");

    if(todoText.length > 0){
      this.refs.todoText.value="";
      dispatch(actions.startAddTodo(todoText,email));
    }else{
      this.refs.todoText.focus();
    }
  }

  render(){
    return (
      <div className="window__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" className="form-control" placeholder="what do you need to do"/>
          <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"16px"}}>Add Todo</button>
        </form>

      </div>
    );
  }
};


export default connect()(AddTodo);
