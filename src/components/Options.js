import { Component } from "react";

class Options extends Component {
  render() {
    return (
      <div className="opciones">
        <div className="opcion">
          <button
        
            className="botones"
            onClick={() => this.props.handlerClick("A")}
          >
            A
          </button>
          <h2>{this.props.optionA}</h2>
        </div>
        <div className="opcion">
          <button
    
            className="botones"
            onClick={() => this.props.handlerClick("B")}
          >
            B
          </button>
          <h2>{this.props.optionB}</h2>
        </div>
      </div>
    );
  }
}

export default Options;
