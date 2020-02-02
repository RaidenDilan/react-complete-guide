import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // 'this. keyword' referes to the class
  // use state with care.
  state = {
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 24 }
    ]
  }

  // METHODS
  switchNameHandler = () => {
    console.log('Was clicked!');
  };

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={ this.switchNameHandler }>Switch Name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }>My Hobbies: Racing</Person>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
