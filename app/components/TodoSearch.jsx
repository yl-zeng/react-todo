var React = require("react");


var TodoSearch = React.createClass({
  handleSearch:function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted,searchText);
  },

  render: function(){
    return (
      <div className="window__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" className="form-control" onChange={this.handleSearch}/>
        </div>  
        <div>
          <lable><input type="checkbox" ref="showCompleted"  onChange={this.handleSearch}/>Show Completed todos</lable>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
