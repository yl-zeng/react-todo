var React = require("react");


var TodoSearch = React.createClass({
  handleSearch:function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted,searchText);
  },

  render: function(){
    return (
      <div>
        <input type="search" ref="searchText" placeholder="Search Todos" className="form-control" onChange={this.handleSearch}/>
        <div className="checkbox-inline">
          <lable><input type="checkbox" ref="showCompleted"  onChange={this.handleSearch}/>Show Completed todos</lable>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
