import React, { Component } from "react";
import "./SolarSystem.scss";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";

class SolarSystem extends Component {
    render() {
        const { star, layout } = this.props;

        let avgDegrees;
        if (layout === "orbit") {
            avgDegrees = 360 / star.planets.length;
            let curDegrees = 0;
            star.planets.forEach(planet => {
                planet.degrees = curDegrees;
                curDegrees += avgDegrees;
            });
        }

        var x0 = 40;
        var y0 = 40;
        var r = 50;
        var numPlanets = star.planets.length;

        // Remember top left pixel of computer screen is (0,0) and both axis go positive from left to right and top to bottom.

        for (var i = 0; i < numPlanets; i++) {
            var x = x0 + r * Math.cos((2 * Math.PI * i) / numPlanets);
            var y = y0 + r * Math.sin((2 * Math.PI * i) / numPlanets);
            console.log("coords", x, y);

            star.planets[i].x = x;
            star.planets[i].y = y;
        }

        return (
            <div className={`solar-system ${layout} view-3d`}>
                <Star star={star} />
                {star.planets.map((planet, key) => {
                    let planetOrbitStyle = {
                        width: `${planet.year / 3}em`,
                        height: `${planet.year / 3}em`
                    };
                    const planetPositionStyle = {
                        left: `${planet.x}%`,
                        top: `${planet.y}%`
                    };
                    let orbitAngleStyle = {
                        //transform: `translate(-50%, -50%) rotate(${planet.degrees}deg)`
                    };
                    return (
                        <div className="planet-orbit-wrapper" key={key} style={orbitAngleStyle}>
                            <div className="planet-orbit" style={planetOrbitStyle}>
                                <div className="planet-position" style={planetPositionStyle}>
                                    <div className="planet-counter-rotation">
                                        <div className="planet-inverter">
                                            <div className="planet-facer">
                                                <Planet planet={planet} />
                                            </div>
                                        </div>
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
