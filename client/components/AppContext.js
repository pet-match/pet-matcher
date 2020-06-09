import React, { useState, createContext } from 'react';

// creates a global context for the entire app with state and setState.
export const AppContext = createContext();

// create our provider for state to be passed down on children components
export const AppProvider = (props) => {
  // this is initial state
  // there are some more secondary useState hooks inside Card.js but it MAY be best practice to put everything
  // in here as a single source of truth??
  const [state, setState] = useState({
    isLoggedIn: false,
    currentUserId: 0,
    prospects: [],
    signUpFormText: {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  return (
    // Wrap all child components in our Provider tag allowing them,
    // access to state:
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};
