import React, { Component } from "react";
import "./SolarSystem.scss";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";

class SolarSystem extends Component {
    render() {
        return (
            <div className={`solar-system ${this.props.layout}`}>
                <div className="orbit-wrapper">
                    <Star star={this.props.star} />
                    {this.props.star.planets.map((planet, key) => {
                        let planetOrbitStyle = { width: `${planet.year / 2}em`, height: `${planet.year / 2}em` };
                        return (
                            <div className="planet-orbit-wrapper" key={key}>
                                <div className="planet-orbit" style={planetOrbitStyle}>
                                    <Planet planet={planet} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default SolarSystem;
