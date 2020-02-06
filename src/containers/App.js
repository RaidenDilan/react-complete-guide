import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'; // Higher ordered Component which simply wraps a Component with the goal of handling any errors that Component might throw

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constrcutor');

    /* THIS: Can also be here */
    // this.state = {
    //   persons: [
    //     { id: 'adsfd', name: 'Max', age: 26 },
    //     { id: 'fdfds', name: 'Manu', age: 29 },
    //     { id: 'ghdgd', name: 'Stephanie', age: 24 }
    //   ],
    //   otherState: 'some other value'
    // }
  }
  state = {
    persons: [
      { id: 'adsfd', name: 'Max', age: 26 },
      { id: 'fdfds', name: 'Manu', age: 29 },
      { id: 'ghdgd', name: 'Stephanie', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  /* DEPRICATED */
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  shouldComponentUpdateUpdate(nextProps, prevProps) {
    console.log('[App.js] shouldComponentUpdateUpdate');
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Raiden';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 20 }
      ],
      otherValue: 'Some other value'
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
    let persons = null;
    console.log('[App.js] render');

    if (this.state.showPersons) {
      persons = <Persons
        persons={ this.state.persons }
        clicked={ this.deletePersonsHandler }
        changed={ this.nameChangedHandler }
        />
    }

    return (
      <div className={ classes.App }>
        <button onClick={ () => {
          this.setState({ showCockpit: false })
        }}
        >
        Remove Cockpit
        </button>
        { this.state.showCockpit ? <Cockpit
          title={ this.props.appTitle }
          showPersons={ this.state.showPersons }
          persons={ this.state.persons }
          clicked={ this.togglePersonsHandler }
          /> : null }
        { persons }
      </div>
    );
  }
}

export default App;
