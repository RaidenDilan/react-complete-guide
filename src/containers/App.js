import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

// We are imporining WithClass with lowercase here because it's not a Component anymore.
// It's a now a normal function, a function that returns a Component function
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';
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
      { id: 'adsfd', name: 'Max', age: 26 }, // if we pass age as String PropTypes will do it's magic
      { id: 'fdfds', name: 'Manu', age: 29 },
      { id: 'ghdgd', name: 'Stephanie', age: 24 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authenticated: false
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

    // We call setState synchronously but it's not guaranteed to execute and finish immediatly.
    // setState does not only take a JavaScrit Object, it also works when you pass in a function.
    this.setState((prevState, props) => { // we are returning an anonymous function here
      return {
        persons: persons,
        changedCounter: prevState.changedCounter + 1 // Here React will guarantee you that this will be the prevState. for changedCounter to updated correctly.
        }
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;
    console.log('[App.js] render');

    if (this.state.showPersons) {
      persons = <Persons
        persons={ this.state.persons }
        clicked={ this.deletePersonsHandler }
        changed={ this.nameChangedHandler }
        isAuthenticated={ this.state.authenticated }
        />
    }

    return (
      <Aux>
        <button onClick={ () => {
          this.setState({ showCockpit: false })
        }}
        >
        Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
          >
          { this.state.showCockpit ? (
            <Cockpit
              title={ this.props.appTitle }
              showPersons={ this.state.showPersons }
              personsLength={ this.state.persons.length }
              clicked={ this.togglePersonsHandler }
              />
          ) : null }
          { persons }
        </AuthContext.Provider>
      </Aux>
    );
  }
}

// We call withClass()
// The first arguement you return will be Component you wrap.
// The second argument you return will be the class name.
export default withClass(App, classes.App);
