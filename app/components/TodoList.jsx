var React = require("react");
import Todo from "Todo";
var {connect} = require("react-redux");
var TodoApi = require("TodoApi");

export var TodoList = React.createClass({
  render:function(){
    var {todos, showCompleted, searchText} = this.props;

    var filterTodos = TodoApi.filterTodos(todos,showCompleted,searchText);

    var renderTodos = ()=>{
      if(filterTodos.length === 0){
        return (
          <p className="window__message">Nothing     To     Do</p>
        );
      }

      return filterTodos.map((todo)=>{
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    };



    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});


export default connect(
  (state)=>{
    return state;
  }
)(TodoList);
