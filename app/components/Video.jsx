var React = require("react");
var {Link} = require("react-router")


export class Video extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.getElementById("vid").load();
  }


  render(){
    return (
      <div className="page">
        <video id="vid" src="/video/video.mp4" preload="auto" loop autoPlay muted/>
      </div>
    );
  }
}
