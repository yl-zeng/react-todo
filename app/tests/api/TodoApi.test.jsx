var $ = require("jquery");
var expect = require("expect");

var TodoApi = require("TodoApi");


describe("TodoApi",()=>{

  beforeEach(()=>{
    localStorage.removeItem("todos");
  });

  it("should exist",()=>{
    expect(TodoApi).toExist();
  });

  describe("setTodos",()=>{
    it("should set valid todos array",()=>{
      var todos=[{
        id:23,
        text:"test all files",
        completed:false
      }];
      TodoApi.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem("todos"));

      expect(actualTodos).toEqual(todos);

    });

    it("should not set invalid todos array",()=>{
      var badTodos = {a:'b'};
      TodoApi.setTodos(badTodos);

      expect(localStorage.getItem("todos")).toBe(null);
    });
  })

  describe("getTodos",()=>{
    it("should return empty array for bad localStorage data",()=>{
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it("should return todo if valid array in localstorage",()=>{
      var todos=[
        {
          id:23,
          text:"test all files",
          completed:false
        }
      ];
      localStorage.setItem("todos",JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual(todos);
    })

  });

  describe("filterTodos",()=>{
    var todos =[{
      id:1,
      text:"test text 1",
      completed:true
    },{
      id:2,
      text:"test text 2",
      completed:false
    },{
      id:3,
      text:"test text 3",
      completed:true
    }];

    it("should return all items if showCompleted is true",()=>{
      var filteredTodos = TodoApi.filterTodos(todos,true,"");
      expect(filteredTodos.length).toBe(3);
    });

    it("should return non-completed items if showCompleted is false",()=>{
      var filteredTodos = TodoApi.filterTodos(todos,false,"");
      expect(filteredTodos.length).toBe(1);
    });

    it("should sort by completed status",()=>{
      var filteredTodos = TodoApi.filterTodos(todos,true,"");
      expect(filteredTodos[0].completed).toBe(false);
    });

    it("should filter todos by searchText",()=>{
      var filteredTodos = TodoApi.filterTodos(todos,true,"text 1");
      expect(filteredTodos.length).toBe(1);
    });

    it("should return all todos if searchText is empty",()=>{
      var filteredTodos = TodoApi.filterTodos(todos,true,"");
      expect(filteredTodos.length).toBe(3);
    });

  });






});
