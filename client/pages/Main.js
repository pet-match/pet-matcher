import React, { useState, useContext } from 'react';
import Deck from '../components/Deck';
import { AppContext } from '../components/AppContext';

export default function Main() {
  const [state, setState] = useContext(AppContext);
  const handleClick = () => setState({ isLoggedIn: !state.isLoggedIn });
  return (
    <div>
      <h1 onClick={handleClick}></h1>
      <Deck/>
    </div>
  );
}
