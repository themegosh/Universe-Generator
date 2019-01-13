import React, { Component } from "react";
import "./App.scss";
import SolarSystem from "./Components/SolarSystem/SolarSystem";
import StarFieldIMG from "./Images/Backgrounds/starfield.svg";
import SolarSystemGenerator from "./Service/SolarSystemGenerator";
import FancyButton from "./Components/FancyButton/FancyButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { star: new SolarSystemGenerator().generateSolarSystem(), layout: "orbit" };
    }

    btnGenerateSolarSystem = e => {
        this.setState(state => ({ star: new SolarSystemGenerator().generateSolarSystem() }));
    };

    btnSwapMode = e => {
        console.log("swap mode!", this.state.layout);
    };

    componentDidMount() {
        this.btnGenerateSolarSystem();
    }

    render() {
        let starFieldStyle = {
            backgroundImage: `url(${StarFieldIMG})`
        };

        return (
            <div className="App">
                <div className="nav-buttons">
                    <FancyButton onClick={this.btnGenerateSolarSystem}>Regenerate</FancyButton>
                    {/* <FancyButton onClick={this.btnSwapMode}>Orbit</FancyButton> */}
                </div>
                <SolarSystem star={this.state.star} layout={this.state.layout} />
                <div className="starfield" id="starset1" style={starFieldStyle} />
            </div>
        );
    }
}

export default App;
