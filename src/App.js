import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
      </div>
    );

    // // BELLOW IF EQUIVALENT TO THE ABOVE CODE
    //
    // // React.createElement() arguments
    // // React.createElement('element', configiration, children, 2nd children)
    // // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!');
    // // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
