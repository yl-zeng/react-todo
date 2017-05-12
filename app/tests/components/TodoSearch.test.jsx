var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var $ = require("jquery");
var expect = require("expect");

var TodoSearch = require("TodoSearch");

describe("TodoSearch",()=>{
  it("should exists",()=>{
    expect(TodoSearch).toExist();
  });

  it("should call onSearch with entered input text",()=>{
    var searchText = "Dog";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;

    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false,'Dog');

  });

  it("should call onSearch with proper checked value",()=>{
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true,"");
  })
});
