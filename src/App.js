import React, { Component } from 'react';
import './App.css';

import Keyboard from '../src/Components/Keyboard/Keyboard';

class App extends Component {
  render() {
    return (
      <div className="Keyboard">
        <Keyboard keyboard="keyboard"/>
      </div>
    );
  }
}

export default App;
