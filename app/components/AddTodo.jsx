var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    var {dispatch} = this.props;
    if(todoText.length > 0){
      this.refs.todoText.value="";
      dispatch(actions.addTodo(todoText));
    }else{
      this.refs.todoText.focus();
    }
  },

  render:function(){
    return (
      <div className="window__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" className="form-control" placeholder="what do you need to do"/>
          <button type="submit" className="btn btn-primary btn-block" style={{marginTop:"16px"}}>Add Todo</button>
        </form>

      </div>
    );
  }
});


export default connect()(AddTodo);
