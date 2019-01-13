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
                        return <Planet planet={planet} key={key} />;
                    })}
                </div>
            </div>
        );
    }
}

export default SolarSystem;
