import React from 'react';

const withClass = (WrappedComponent, className) => {
  // We are returning a functional Component here when using (WrappedComponent, className) => {};
  // We are also not returning JSX, We are returing another function definition.

  return props => (
    <div className={ className }>
      <WrappedComponent { ...props } />
    </div>
  );

  // IMPORTANT & POWERFULL TOOL:
  // the spread operator pulls out all the properties
  // that are inside of this props Object and distributs
  // them as new key value pairs on this WrappedComponent.
}

export default withClass;
