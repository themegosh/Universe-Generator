import React, { Component } from "react";
import "./App.scss";
import SolarSystem from "./Components/SolarSystem/SolarSystem";
import StarFieldIMG from "./Images/Backgrounds/starfield.svg";

class App extends Component {
    render() {
        let starFieldStyle = {
            backgroundImage: `url(${StarFieldIMG})`
        };
        return (
            <div className="App">
                <SolarSystem />
                <div className="starfield" id="starset1" style={starFieldStyle} />
            </div>
        );
    }
}

export default App;
