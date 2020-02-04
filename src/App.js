import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adsfd', name: 'Max', age: 26 },
      { id: 'fdfds', name: 'Manu', age: 29 },
      { id: 'ghdgd', name: 'Stephanie', age: 24 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Raiden';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 20 }
      ],
      showPersons: false
    })
  };

  nameChangedHandler = (event, id) => {
    // const person = this.state.persons.find();
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // ALTERNATIVE
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 26 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Stephanie', age: 20 }
    //   ]
    // })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.splice(); // THIS: Mutates our Array
    const persons = [...this.state.persons] // THIS: Does not mutate our Array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click= { () => this.deletePersonsHandler(index) }
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={ (event) => this.nameChangedHandler(event, person.id) }
              />
          }) }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={ style }
          onClick={ this.togglePersonsHandler }
          >
          Toggle Persons
        </button>
        { persons }
      </div>
    );
  }
}

export default App;

// <Person
//   name={ this.state.persons[0].name }
//   age={ this.state.persons[0].age }
//   />
// <Person
//   name={ this.state.persons[1].name }
//   age={ this.state.persons[1].age }
//   click={ this.switchNameHandler.bind(this, 'Max') }
//   changed={ this.nameChangedHandler }
//   >
//   My Hobbies: Racing
// </Person>
// <Person
//   name={ this.state.persons[2].name }
//   age={ this.state.persons[2].age }
//   />
