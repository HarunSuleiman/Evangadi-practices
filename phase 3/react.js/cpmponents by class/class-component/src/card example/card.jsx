import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div className="card">
          <p className="p1">Hello, I am {this.props.name}</p>
          <p className="p2">Fullstack website developer</p>
          <p className="p3">Contact:{this.props.email}</p>
          <p className="p4">Thank you!</p>
        </div>
      </>
    );
  }
}

export default Card;
