import React, { Component } from 'react';
import './App.css';

import Keyboard from '../src/Components/Keyboard/Keyboard';

class App extends Component {
  render() {
    return (
      <div className="Keyboard">
        <Keyboard />
      </div>
    );
  }
}

export default App;
