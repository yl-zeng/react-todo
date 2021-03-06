var expect = require("expect");
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";


import firebase,{firebaseRef} from 'app/firebase/';
var actions = require("actions");

var createMockStore = configureMockStore([thunk]);



describe("Actions",()=>{
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
      todo:{
        id:"123abc",
        text: "something",
        completed: false,
        createdAt:0
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it("should create todo and dispatch ADD_TODO",(done)=>{

    const store = createMockStore({});
    const todoText = "My todo Item";
    const email = "ylinzeng69+gmail.com"

    store.dispatch(actions.startAddTodo(todoText,email)).then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type:"ADD_TODO"
      });

      expect(actions[0].todo).toInclude({
        text:todoText
      });
      done();

    }).catch(done);

  });



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

  it("should generate update todo action",()=>{
    var action = {
      type:"UPDATE_TODO",
      id: 1,
      updates:{
        completed:false
      }
    }

    var res = actions.updateTodo(action.id,action.updates);
    expect(res).toEqual(action);
  });


  describe("Tests with firebase todos",()=>{

    var testTodoRef;

    beforeEach((done)=>{

      var todosRef = firebaseRef.child("todos");

      todosRef.remove().then(()=>{
        testTodoRef = firebaseRef.child("todos").push();

        testTodoRef.set({
          text: "something to test",
          completed: false,
          createdAt: 123456
        })
      }).then(()=>{
        done();
      }).catch(done);

    });

    afterEach((done)=>{
      testTodoRef.remove().then(()=>{
        done();
      });
    });

    it("should toggle todo and dispatch UPDATE_TODO action",(done)=>{
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key,true);

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type:"UPDATE_TODO",
          id:testTodoRef.key,
        });

        expect(mockActions[0].updates).toInclude({
          completed:true
        });

        expect(mockActions[0].updates.completedAt).toExist();
        done();
      },done);
    });

    it("should populate todos and dispatch ADD_TODOS",(done)=>{
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(()=>{
        const mockActions = store.getActions();
        expect(mockActions[0].type).toBe("ADD_TODOS");
        expect(mockActions[0].todos.length).toBe(1);
        expect(mockActions[0].todos[0].text).toBe("something to test");

        done();
      },done);

    });




  });


});
