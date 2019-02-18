import React, { Component } from "react";
import "./SolarSystem.scss";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";

class SolarSystem extends Component {
    render() {
        const { star, view3d } = this.props;

        let avgDegrees;
        avgDegrees = 360 / star.planets.length;
        let curDegrees = 0;
        star.planets.forEach(planet => {
            planet.degrees = curDegrees;
            curDegrees += avgDegrees;
        });

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
            <div className="universe">
                <div className="galaxy">
                    <div className={`solar-system ${view3d ? "view-3d" : ""} `}>
                        {star.planets.map((planet, key) => {
                            const size = planet.year;
                            const speed = planet.year;
                            let planetOrbitStyle = {
                                width: `${size}em`,
                                height: `${size}em`,
                                marginTop: `-${size / 2}em`,
                                marginLeft: `-${size / 2}em`,
                                animationDuration: `${speed}s`
                            };

                            console.log("planetOrbitStyle", planetOrbitStyle);
                            const planetPositionStyle = {
                                left: `${planet.x}%`,
                                top: `${planet.y}%`,
                                zIndex: key + 1,
                                animationDuration: `${speed}s`
                            };
                            return (
                                <div className="planet-orbit" key={key} style={planetOrbitStyle}>
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
                            );
                        })}
                        <Star star={star} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SolarSystem;
