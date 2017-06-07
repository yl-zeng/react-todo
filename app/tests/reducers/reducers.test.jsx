var expect = require("expect");
var reducers = require("reducers");

var df = require("deep-freeze-strict");

describe("Reducers",()=>{
  describe("searchTextReducer",()=>{

    it("should set searchText",()=>{
      var action = {
        type:"SET_SEARCH_TEXT",
        searchText: "dog"
      };

      var res = reducers.searchTextReducer(df(""),df(action));

      expect(res).toEqual(action.searchText);
    });

    it("showCompleted status get filpped",()=>{
      var action = {
        type:"TOGGLE_SHOW_COMPLETED",
      };

      var res = reducers.showCompletedReducer(df(false),df(action));

      expect(res).toEqual(true);
    });
  });

  describe("todosReducer",()=>{
    it("should add new todo",()=>{
      var action = {
        type: "ADD_TODO",
        todo: {
          id:"abc123",
          text: "Something to do",
          completed: false,
          createdAt: 92384275
        }
      };

      var res = reducers.todosReducer(df([]),df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it("should toggle todo",()=>{
      var todos = [{
        id:"123",
        text: "something",
        completed:true,
        createdAt:123,
        completedAt:125
      }];

      var updates = {
        completed:false,
        completedAt:null
      };

      var action = {
        type :"UPDATE_TODO",
        id : todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos),df(action));

      expect(res[0].completed).toBe(updates.completed);
      expect(res[0].completedAt).toBe(updates.completedAt);
      expect(res[0].text).toBe(todos[0].text);

    });

    it("should add existing todos",()=>{
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

      var res = reducers.todosReducer(df([]),df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    });

  });

});
