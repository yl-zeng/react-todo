var React = require("react");

var AddTodo = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value="";
      this.props.onAddTodo(todoText);
    }else{
      this.refs.todoText.focus();
    }
  },

  render:function(){
    return (
      <div className="window__add">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" className="form-control" placeholder="what do you need to do"/>
          <button type="submit" className="btn btn-primary btn-block">Add Todo</button>
        </form>

      </div>
    );
  }
});

module.exports = AddTodo;
