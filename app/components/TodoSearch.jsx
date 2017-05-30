var React = require("react");
var {connect} = require("react-redux");

var actions = require("actions");

export var TodoSearch = React.createClass({

  render: function(){
    var {dispatch,showCompleted,searchText} = this.props;

    return (
      <div className="window__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} className="form-control" onChange={()=>{
              var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <lable><input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }}/>
            Show Completed todos
          </lable>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) =>{
    return {
      showCompleted:state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
