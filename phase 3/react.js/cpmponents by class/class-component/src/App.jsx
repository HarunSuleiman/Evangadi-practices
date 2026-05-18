import "./card example/card.css";
import { Component } from "react";
import Card from "./card example/card.jsx";

class App extends Component {
  render() {
    return (
      <>
        <h1> React js using PROPS in CLASS components </h1>
        <Card name="Harun." email="harunsila55@gmail.com" />
        <Card name="Abebe" email="abebesila55@gmail.com" />
        <Card />
      </>
    );
  }
}

export default App;
