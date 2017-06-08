
var $ = require("jquery");


module.exports={

  filterTodosForUser: function(todos,email){
    var filterTodos = todos;
    filterTodos = filterTodos.filter((todo)=>{
      return todo.email===email;
    });
    return filterTodos;
  },


  filterTodos: function(todos,showCompleted,searchText){
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });

    filteredTodos = filteredTodos.filter((todo)=>{
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText)>-1;
    });


    filteredTodos.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0;
      }
    });
    return filteredTodos;
  }


};
