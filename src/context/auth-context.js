import React from 'react';

/* React.createContext() a globally available JavaScrit Object, though you decided whether it's available */
const authContext = React.createContext({
  // default values
  authenticated: false,
  login: () => {}
});

export default authContext;
