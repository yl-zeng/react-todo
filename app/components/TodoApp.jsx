var React = require("react");

var TodoList = require("TodoList");
var AddTodo = require("AddTodo");

var TodoSearch = require("TodoSearch");
var uuid = require("node-uuid");
var moment = require("moment");

var TodoApi = require("TodoApi");

var TodoApp = React.createClass({

  getInitialState: function(){
    return{
      showCompleted:false,
      searchText:"",
      todos:TodoApi.getTodos()
    };
  },
  componentDidUpdate:function(){
    TodoApi.setTodos(this.state.todos);
  },
  handleAddTodo:function (text){
      this.setState({
        todos:[
          ...this.state.todos,
          {
            id:uuid(),
            text:text,
            completed:false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ]
      });
  },

  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  handleToggle:function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed? moment().unix() : undefined;
      }

      return todo;
    });

    this.setState({
      todos:updatedTodos
    });
  },

  render:function(){
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos,showCompleted,searchText);


    return (
      <div className="container">
        <h1 className="page-title text-center">Todo App</h1>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 main-window">
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
