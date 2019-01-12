import React, { Component } from "react";
import "./Planet.scss";

class Planet extends Component {

    render() {
        let planet = this.props.planet;
        var planetImgStyle = {
          transform: `rotate(${planet.rotation}deg)`,
          width: `${planet.diameter * 0.3 }em`,
          WebkitFilter: `drop-shadow(0px 0px 10px ${planet.atmoColor})`
        };
        return (
            <div className="planet">
                <img
                    src={planet.image}
                    className="image"
                    alt={planet.name}
                    style={planetImgStyle}
                />
            </div>
        );
    }
}

export default Planet;
