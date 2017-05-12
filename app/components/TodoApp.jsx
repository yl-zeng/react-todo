var React = require("react");

var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

var TodoApp = React.createClass({

  getInitialState: function(){
    return{
      todos:[
        {
          id:1,
          text:"walk the dog"
        },{
          id:2,
          text: "clean the yard"
        },{
          id:3,
          text: "leave email "
        },{
          id:4,
          text: "clean the yard"
        }
      ]
    };
  },

  handleAddTodo:function (text){
      alert('new todo:' + text);
  },

  render:function(){
    var {todos} = this.state;



    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
