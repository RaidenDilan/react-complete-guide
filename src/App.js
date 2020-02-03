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
    ],
    // otherState = 'some other value'
  }

  // METHODS
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Raiden';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 20 }
      ]
    })
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 26 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 20 }
      ]
    })
  };

  // We can pass a value to switchNameHandler like newName value
  // How do we pass that new data
  // This are two ways of doing this
  // With .bind(this, 'list of arguements')
  // OR
  // With new syntax which is ArrowFunction
  // When using ArrowFunction implicitly returns the body like so () => return this.switchNameHandler()
  // We are also passing an anonymise function when using this.switchNameHandler() - So it does not get executed immediatlay even when using switchNameHandler is invoked
  // This syntax - () => this.switchNameHandler('Raiden!!') can be inefficient.


  render() {
    // RESTRICION: This is hard coding style when using inline styles.
    // inline style: In React we often use css styles in JavaScript
    // our style constant is a variable
    // Use inline style when you want to scope a style to a specific element
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={ style }
          onClick={ () => this.switchNameHandler('Raiden!!') }
          >
          Switch Name
        </button>
        <Person
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age }
          />
        <Person
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'Max') }
          changed={ this.nameChangedHandler }
          >
          My Hobbies: Racing
        </Person>
        <Person
          name={ this.state.persons[2].name }
          age={ this.state.persons[2].age }
          />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
