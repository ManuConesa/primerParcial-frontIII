import React, { Component } from "react";

class Recorded extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.previousSelection}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.saved}</ul>
      </div>
    );
  }
}

export default Recorded;