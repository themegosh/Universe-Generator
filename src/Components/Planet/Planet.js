import React, { Component } from "react";
import "./Planet.scss";

class Planet extends Component {

    render() {
        let planet = this.props.planet;
        var planetImgStyle = {
          transform: `rotate(${planet.rotation}deg)`,
          width: `${planet.diameter * 0.5 }em`
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
