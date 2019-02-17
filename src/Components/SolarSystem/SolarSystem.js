import React, { Component } from "react";
import "./SolarSystem.scss";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";

class SolarSystem extends Component {
    render() {
        let avgDegrees;
        if (this.props.layout === "orbit") {
            avgDegrees = 360 / this.props.star.planets.length;
            let curDegrees = 0;
            this.props.star.planets.forEach(planet => {
                planet.degrees = curDegrees;
                curDegrees += avgDegrees;
            });
        }

        return (
            <div className={`solar-system ${this.props.layout}`}>
                <Star star={this.props.star} />
                {this.props.star.planets.map((planet, key) => {
                    let planetOrbitStyle = {
                        width: `${planet.year / 3}em`
                    };
                    let orbitAngleStyle = {
                        transform: `translate(-50%, -50%) rotate(${planet.degrees}deg)`
                    };
                    return (
                        <div className="planet-orbit-wrapper" key={key} style={orbitAngleStyle}>
                            <div className="planet-orbit" style={planetOrbitStyle}>
                                <div className="planet-position">
                                    <div className="planet-counter-rotation">
                                        <Planet planet={planet} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SolarSystem;
