import React, { Component, useState, useContext, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../components/AppContext';

export default function Deck() {
  const [state, setState] = useContext(AppContext);
  const handleClick = () =>  console.log('Current State isLogged in: ', state.isLoggedIn);
  const cards = [];

  if (!cards) return (
    <div>
      <h1>Loading data, please wait...</h1>
    </div>
  );
  
  // if (!cards.length) return (
  //   <div>No prospects found...take your pet out for a walk and smile at strangers. You never know!!!</div>
  // );

  // need to get this user's userId from state, and then pass here
  useEffect( () => {
    fetch('/api/getProspects/1')
      .then( res => res.json())
      .then( prospects => {
        if (!Array.isArray(prospects)) notes = [];
        return this.setState({
          notes,
          gotNotes: true
        });
     })
     .then( data => {
       setState(data);
     })
  }, []);

  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} id={i}/>);
  }

  return ( <div className="deck" onClick={handleClick}>
            {cards}
          </div>
  );
}

// username, age, desc, photo
