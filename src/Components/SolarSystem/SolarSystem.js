import React, { Component } from "react";
import "./SolarSystem.scss";
import SolarSystemGenerator from "./../../Service/SolarSystemGenerator";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";

class SolarSystem extends Component {
    constructor(props) {
        super(props);
        this.state = { star: null };

        this.generateSolarSystem = this.generateSolarSystem.bind(this);
        this.generateSolarSystem();
    }

    generateSolarSystem(e) {
        console.log("generating!");
        var result = new SolarSystemGenerator().generateSolarSystem();
        console.log("result", result);
        this.setState(state => ({ star: result }));
    }

    render() {
        if (this.state.star) {
            return (
                <div className="solar-system">
                    <button type="button" className="fancy-button" onClick={this.generateSolarSystem}>
                        Regenerate
                    </button>
                    <Star star={this.state.star} />

                    {this.state.star.planets.map((planet, key) => {
                        return <Planet planet={planet} key={key} />;
                    })}
                </div>
            );
        } else {
            return (
                <div className="solar-system">
                    <h2>Hey, want a Solar System?</h2>
                    <button type="button" className="fancy-button" onClick={this.generateSolarSystem}>
                        Generate
                    </button>
                </div>
            );
        }
    }
}

export default SolarSystem;
