import React, { Component } from 'react';
import './App.css';
import SolarSystem from './Components/SolarSystem/SolarSystem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SolarSystem></SolarSystem>
        </header>
      </div>
    );
  }
}

export default App;
