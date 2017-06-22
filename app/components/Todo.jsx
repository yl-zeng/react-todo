var React = require("react");
var moment = require("moment");

var {connect} = require("react-redux");
var actions = require("actions");

export class Todo extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    var {id,text,completed,createdAt,completedAt,dispatch} = this.props;

    var todoClassName = completed?'todo todo-completed':'todo';

    var renderDate = ()=>{
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed){
        message = "Completed ";
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
    };


    return(
      <div className={todoClassName} onClick={()=>{
          dispatch(actions.startToggleTodo(id,!completed));
        }}>
        <div>
          <input type="checkbox"  checked={completed}/>
        </div>
        <div style={{paddingLeft:"6px"}}>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
};

export default connect()(Todo);
