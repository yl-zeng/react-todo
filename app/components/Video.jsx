var React = require("react");
var {Link} = require("react-router")


export class Video extends React.Component{

  constructor(props){
    super(props);
  }

  handleEnd = ()=>{
    this.props.onEnd();
  }


  componentDidMount(){
    document.getElementById("vid").load();
  }


  render(){
    return (
      <div>
        <video id="vid" src={"/video/"+ this.props.count + ".mp4"}
          style={{background:"transparent url('/img/back" + this.props.count + ".jpg') no-repeat 0 0"}}
          preload="auto" autoPlay muted onEnded={this.handleEnd}/>
      </div>
    );
  }
}
