import React, { Component, useState, useContext } from 'react';
import Card from './Card';
import { AppContext } from '../components/AppContext';

export default function Deck() {
  const [state, setState] = useContext(AppContext);
  const handleClick = () =>
    console.log('Current State isLogged in: ', state.isLoggedIn);
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} id={i} />);
    // console.log(cards);
  }
  return <div onClick={handleClick}>{cards}</div>;
}

// username, age, desc, photo
