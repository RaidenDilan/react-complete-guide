import React from 'react';

const withClass = (WrappedComponent, className) => {
  // We are returning a functional Component here when using (WrappedComponent, className) => {};
  // We are also not returning JSX, We are returing another function definition.
  return props => (
    <div className={ className }>
      <WrappedComponent/>
    </div>
  );
}

export default withClass;
