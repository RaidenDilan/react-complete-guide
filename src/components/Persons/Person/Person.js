import React, { Component } from 'react';
// import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

/* For React version 2.x or higher rename Person.css to Person.module.css
 * Then you don't need to run npm run eject to use CSS Modules
 * Then Import like this ---> import classes from './Person.module.css';
 */

// This is a Stateless Component because it has no internal state management
// It is good practice to use as many of this Stateless Component then StateFull Component
// Stateless Components are also called Presentational Components because they present something.

// This is a reusable Component
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); // React references to focus() on the last React element
  }

  // A static property can be accessed from outside from the need to instantiate an object based on this Person class first
  // And React will access contextType for you.
  static contextType = AuthContext; // our value is the AuthContext Object;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log('[Person.js] componentDidMount - this.context.authenticated', this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');

    // React has a it's own Aux Higher Order Component called React.Fragment.
    // You can also import Fragment from react. and replace Aux with Fragment.
    return (
      <Aux>
        { this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }
        <p onClick={ this.props.click }>I'm { this.props.name } and I am { this.props.age } years old! </p>
        <p>{ this.props.children }</p>
        <input
          // ref={ (inputEl) => { this.inputElement = inputEl } } // 1st APPROACH to using React references
          ref={ this.inputElementRef } // 2n APPROACH to using React references with the constructor() // Also function based approach.
          type="text"
          onChange={ this.props.changed }
          value={ this.props.name }
          />
      </Aux>
    )
  }
};


/* Use propTypes if you are building a Component Libary to share with other developers. */
/* Using propTypes is a special property which you add to any JavaScrit Object or any JavaScrit Component Object, */
/* that React will watch out for in development mode, and give you a warning when passing in incorrect props. */
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
