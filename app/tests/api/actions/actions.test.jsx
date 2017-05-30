var expect = require("expect");
var actions = require("actions");



describe("",()=>{
  it("should generate set search text action",()=>{
    var action = {
      type: "SET_SEARCH_TEXT",
      searchText: "some search text"
    };

    var generatedAction = actions.setSearchText(action.searchText);

    expect(generatedAction).toEqual(action);
  });


  it("should generate add todo action",()=>{
    var action = {
      type: "ADD_TODO",
      text: " some todo"
    };

    var generatedAction = actions.addTodo(action.text);
    expect(generatedAction).toEqual(action);
  })

  it("should generate toggle show completed action",()=>{
    var action = {
      type:"TOGGLE_SHOW_COMPLETED"
    }

    var generatedAction = actions.toggleShowCompleted();
    expect(generatedAction).toEqual(action);
  })

  it("should generate add todos action object",()=>{
    var todos = [{
      id:"111",
      test:"anything",
      completed:false,
      completedAt:undefined,
      createdAt:33000
    }];

    var action = {
      type:"ADD_TODOS",
      todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);

  });

  it("should generate toggle todo action",()=>{
    var action = {
      type:"TOGGLE_TODO",
      id: 1
    }

    var generatedAction = actions.toggleTodo(action.id);
    expect(generatedAction).toEqual(action);
  })


});
