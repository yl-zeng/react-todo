var React = require("react");
var {connect} = require("react-redux");

var actions = require("actions");

export class TodoSearch extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
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
          <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
              dispatch(actions.toggleShowCompleted());
            }}/>
          <p style={{color:"#dddddd",padding:"10px 0 0 6px"}}>Show Completed todos</p>
        </div>
      </div>
    );
  }
};

export default connect(
  (state) =>{
    return {
      showCompleted:state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
