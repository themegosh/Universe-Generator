import React, { Component } from "react";
import "./Planet.scss";

class Planet extends Component {
    render() {
        let planet = this.props.planet;

        return (
            <div className="planet">
                <hr />
                {planet.name}
                <img
                    src={planet.image}
                    className="image"
                    alt={planet.name}
                    style={{ width: `${planet.diameter * 8}px` }}
                />
                <div className="planetType">Planet Type: {planet.planetType}</div>
                <div className="planetMass">Gravity: {planet.gravity}</div>
                <div className="planetMass">Days: {planet.days}</div>
                <div className="planetMass">Year: {planet.year}</div>
                <div className="planetMass">Diameter: {planet.diameter}</div>
            </div>
        );
    }
}

export default Planet;
