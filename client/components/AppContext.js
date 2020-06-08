import React, { useState, createContext } from 'react';

// creates a global context for the entire app with state and setState.

export const AppContext = createContext();

export const AppProvider = (props) => {
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

// state: {users:[], isLoggedIn: boolean}
