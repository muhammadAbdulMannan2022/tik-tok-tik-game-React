import React, { Component } from "react";
import "./app.css";
import Game from "./Components/game";
import Nave from "./Components/nav";

export default class App extends Component {
  state = {
    class: "",
  };
  show = () => {
    if (this.state.class) {
      this.setState({ class: "" });
    } else {
      this.setState({ class: "show" });
    }
  };
  render() {
    return (
      <>
        <Nave show={this.show} />
        <Game class={this.state.class} />
      </>
    );
  }
}
