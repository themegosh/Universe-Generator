import React, { Component } from "react";
import "./App.scss";
import SolarSystem from "./Components/SolarSystem/SolarSystem";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <SolarSystem />
                </header>
            </div>
        );
    }
}

export default App;
