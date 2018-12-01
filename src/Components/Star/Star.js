import React, { Component } from "react";
import Planet from "./../Planet/Planet";
import ReactSVG from "react-svg";
import "./Star.scss";

class Star extends Component {
  render() {

    let star = this.props.star;

    return (
      <div className="star">
        <div>
          {star.name}
          <img className="image" src={star.image} alt={star.name} />
        </div>
        {star.planets.map((planet, key) => {
          return <Planet planet={planet} key={key} />;
        })}
      </div>
    );
  }
}

export default Star;
