var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");
var expect = require("expect");
var {Provider} = require('react-redux');

import ConnectedTodoList,{TodoList} from 'TodoList';
import ConnectedTodo,{Todo} from 'Todo';
import {configure} from 'configureStore';




describe('TodoList',()=>{
  it('should exist',()=>{
    expect(TodoList).toExist();
  });

  it("should render one Todo component for each todo item",()=>{
    var todos = [{
      id:1,
      text:"Do 1",
      completed:false,
      completedAt:undefined,
      createdAt: 500,
      email:"ylinzeng69+gmail.com"
    },{
      id:2,
      text:"Do 2",
      completed:false,
      completedAt:undefined,
      createdAt: 500,
      email:"ylinzeng69+gmail.com"
    }];

    var store = configure({
      todos: todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );

    var todoList = TestUtils.scryRenderedComponentsWithType(provider,ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it("should render empty message if no todos",()=>{
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.window__message').length).toBe(1);
  });

});
