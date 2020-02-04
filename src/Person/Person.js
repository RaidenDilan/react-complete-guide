import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components'

import './Person.css';

// This is a Stateless Component because it has no internal state management
// It is good practice to use as many of this Stateless Component then StateFull Component
// Stateless Components are also called Presentational Components because they present something.

// This a function Component
const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

// This is a reusable Component
const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '450px'
  //   }
  // };

  return (
    // <div className="Person" style={ style }>
    <StyledDiv>
      <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old! </p>
      <p>{ props.children }</p>
      <input
        type="text"
        onChange={ props.changed }
        value={ props.name }
        />
    </StyledDiv>
  )
};

export default person;
// export default Radium(person);
