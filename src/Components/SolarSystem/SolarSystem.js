import React, { Component } from "react";
import "./SolarSystem.scss";
import SolarSystemGenerator from "./../../Service/SolarSystemGenerator";
import Star from "./../Star/Star";
import Planet from "./../Planet/Planet";
import FancyButton from "./../FancyButton/FancyButton";

class SolarSystem extends Component {
    constructor(props) {
        super(props);
        this.state = { star: null, mode: "orbit" };
    }
    componentDidMount() {
        this.btnGenerateSolarSystem();
    }

    btnGenerateSolarSystem = e => {
        console.log("generating!");
        var result = new SolarSystemGenerator().generateSolarSystem();
        console.log("result", result);
        this.setState(state => ({ star: result }));
    };

    btnSwapMode = e => {
        console.log("swap mode!", this.state.mode);
    };

    render() {
        if (this.state.star) {
            return (
                <div className={`solar-system ${this.state.mode}`}>
                    <div className="nav-buttons">
                        <FancyButton onClick={this.btnGenerateSolarSystem}>Regenerate</FancyButton>
                        <FancyButton onClick={this.btnSwapMode}>Orbit</FancyButton>
                    </div>
                    <Star star={this.state.star} />
                    <div className="planet-orbit">
                        {this.state.star.planets.map((planet, key) => {
                            return <Planet planet={planet} key={key} />;
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="solar-system">
                    <h2>Hey, want a Solar System?</h2>
                    <FancyButton onClick={this.btnGenerateSolarSystem}>Regenerate</FancyButton>
                </div>
            );
        }
    }
}

export default SolarSystem;
