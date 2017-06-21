var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");
var expect = require("expect");


var actions = require("actions");
var {AddTodo} = require("AddTodo");

describe('AddTodo',()=>{
  it('should exist',()=>{
    expect(AddTodo).toExist();
  });

  it("should dispatch ADD_TODO wehn valid todo text",()=>{
    var todoText = "Check mail";
    var email = "ylinzeng69+gmail.com"
    var action = actions.startAddTodo(todoText,email);


    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el =  $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });


  it("should not dispatch ADD_TODO when invalid todoText",()=>{
    var todoText = "";
    var email = "ylinzeng69+gmail.com"
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el =  $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});
