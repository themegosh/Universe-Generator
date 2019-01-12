import React, { Component } from "react";
import "./Planet.scss";

class Planet extends Component {
    render() {
        let planet = this.props.planet;
        let planetSize = {
            width: `${planet.diameter / 1000}vw`,
            height: `${planet.diameter / 1000}vw`,
            transform: `rotate(${planet.rotation}deg)`
            //filter: `drop-shadow(0px 0px 10px ${planet.atmosphereColor})`
        };
        let planetStyle = {
            background: `${planet.atmosphereColor}`
        };
        return (
            <div className="planet-wrapper" style={planetSize}>
                <div className="gradient-holder">
                    <div className="gradient first" style={planetStyle} />
                    <div className="gradient second" style={planetStyle} />
                    <div className="gradient third surface-wrapper" style={planetStyle}>
                        <img src={planet.surface} className="first-surface" alt={planet.name} />
                        <img src={planet.surface} className="second-surface" alt={planet.name} />
                    </div>
                </div>
                {/* <img src={planet.image} className="image" alt={planet.name} style={planetImgStyle} /> */}
            </div>
        );
    }
}

export default Planet;
