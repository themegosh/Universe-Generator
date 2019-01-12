import React, { Component } from "react";
import "./SolarSystem.scss";
import SolarSystemGenerator from "./../../Service/SolarSystemGenerator";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";
import FancyButton from "./../FancyButton/FancyButton";

class SolarSystem extends Component {
    constructor(props) {
        super(props);
        this.state = { star: null };

        this.generateSolarSystem = this.generateSolarSystem.bind(this);
    }
    componentDidMount() {
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
                    <FancyButton onClick={this.generateSolarSystem}>Regenerate</FancyButton>
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
                    <FancyButton onClick={this.generateSolarSystem}>Regenerate</FancyButton>
                </div>
            );
        }
    }
}

export default SolarSystem;
