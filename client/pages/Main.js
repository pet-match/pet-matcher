import React, { useState, useContext } from 'react';
import Deck from '../components/Deck';
import { AppContext } from '../components/AppContext';

export default function Main() {
  const [state, setState] = useContext(AppContext);
  // change our state object isLoggedIn property from TRUE to FALSE/ Vice-versa
  // this is just to test state and context.
  // To test, add a text inside the h1 on Line12 and click on h1 to toggleisLoggedIn and check reactDevTools
  const handleClick = () => setState({ isLoggedIn: !state.isLoggedIn });
  return (
    <div>
      <h1 onClick={handleClick}></h1>
      <Deck />
    </div>
  );
}
