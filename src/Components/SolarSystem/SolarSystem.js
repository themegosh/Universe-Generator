import React from "react";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";
import "./SolarSystem.scss";

const SolarSystem = props => {
    const { star, view3d } = props;

    var x0 = 40;
    var y0 = 40;
    var r = 50;
    var numPlanets = star.planets.length;

    //some trig to place the planets equally around their orbits
    for (var i = 0; i < numPlanets; i++) {
        star.planets[i].x = x0 + r * Math.cos((2 * Math.PI * i) / numPlanets);
        star.planets[i].y = y0 + r * Math.sin((2 * Math.PI * i) / numPlanets);
    }

    return (
        <div className="universe">
            <div className="galaxy">
                <div className={`solar-system ${view3d ? "view-3d" : ""} `}>
                    {star.planets.map((planet, key) => {
                        const size = planet.year;
                        const speed = planet.year;
                        const planetOrbitStyle = {
                            width: `${size}em`,
                            height: `${size}em`,
                            marginTop: `-${size / 2}em`,
                            marginLeft: `-${size / 2}em`,
                            animationDuration: `${speed}s`
                        };

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
};

export default SolarSystem;
