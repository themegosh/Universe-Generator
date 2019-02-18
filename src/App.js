import React, { Component } from "react";
import "./App.scss";
import SolarSystem from "./Components/SolarSystem/SolarSystem";
import StarFieldIMG from "./Images/Backgrounds/starfield.svg";
import SolarSystemGenerator from "./Service/SolarSystemGenerator";
import FancyButton from "./Components/FancyButton/FancyButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { star: new SolarSystemGenerator().generateSolarSystem(), view3d: true };
    }

    btnGenerateSolarSystem = e => {
        this.setState(state => ({ star: new SolarSystemGenerator().generateSolarSystem() }));
    };

    handleViewChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            view3d: value
        });
    };

    render() {
        let starFieldStyle = {
            backgroundImage: `url(${StarFieldIMG})`
        };

        const { view3d, star } = this.state;

        return (
            <div className="App">
                <div className="nav-buttons">
                    <FancyButton onClick={this.btnGenerateSolarSystem}>Regenerate</FancyButton>
                    <label>
                        <input name="view3d" type="checkbox" checked={view3d} onChange={this.handleViewChange} /> 3D
                    </label>
                    {/* <FancyButton onClick={this.btnSwapMode}>Orbit</FancyButton> */}
                </div>
                <div className="starfield" id="starset1" style={starFieldStyle} />
                <SolarSystem star={star} view3d={view3d} />
            </div>
        );
    }
}

export default App;
