import React, { useContext } from 'react';
import { AppContext } from '../components/AppContext';
import SignIn from '../pages/SignIn';
import Main from '../pages/Main';

export default function Root() {
  const [state, setState] = useContext(AppContext);
  const handleClick = () => {
    setState({ isLoggedIn: !state.isLoggedIn });
  };
  return (
    <>
      <h1 onClick={handleClick}>
        Hello this is root container. Click me to toggle isLoggedIn state
      </h1>
      {state.isLoggedIn ? <Main /> : <SignIn />}
    </>
  );
}
