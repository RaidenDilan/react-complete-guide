import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  /* DEPRICATED */
  // componentWillRecieveProps(props) {
  //   console.log('[Persons.js] componentWillRecieveProps', props);
  // }

  /* THIS IS NOT RECOMMEND AS REACT RUNS THIS REACT LIFECYCLE BY DEFAULT */
  /* THIS IS ALSO NOT SUPER PERFORMANCE HEADVY CHECK */
  /* THIS IS NOT NEED because PureComponent already runs shouldComponentUpdate() */
  // shouldComponentUpdate(nextProps, prevProps) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) return true;
  //   else return false;
  //   // return true;
  // }

  getSnapshotBeforeUpdate(prevProps, nextProps) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log('[Persons.js] snapshot', snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  /* DEPRICATED */
  // componentWillUpdate() {}

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
      return <Person
        click= { () => this.props.clicked(index) }
        name={ person.name }
        age={ person.age }
        key={ person.id }
        changed={ (event) => this.props.changed(event, person.id) }
        isAuth={ this.props.isAuthenticated }
      />
    });
  }
};

export default Persons;
