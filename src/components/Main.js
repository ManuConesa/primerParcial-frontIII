import React from "react";
import Recorded from "./Recorded";
import Options from "./Options";
import data from "../data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      counter: 1,
      story: data[0],
      savedOptions: [],
    };
    this.handlerClick = this.handlerClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter >= 6) {
      alert("FIN");
    }
  }

  handlerClick(prevSelection) {
    //Busco el proximo objeto en el json
    const nextStory = data.find(
      (item) => item.id === this.state.counter + 1 + prevSelection.toLowerCase()
    );
    //valido si me trae ese objeto
    if (!nextStory) {
      this.setState({ ...this.state, counter: this.state.counter + 1 });
      console.log("Story not found");
      return;
    }

    this.setState({
      counter: this.state.counter + 1,
      story: nextStory,
      selectedOption: prevSelection,
      savedOptions: [...this.state.savedOptions, prevSelection],
    });
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.state.story.historia}</h1>
        <Options
          handlerClick={this.handlerClick}
          optionA={this.state.story.opciones.a}
          optionB={this.state.story.opciones.b}
        />
        {
          <Recorded
            previousSelection={this.state.selectedOption}
            saved={this.state.savedOptions.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          />
        }
      </div>
    );
  }
}

export default Main;
