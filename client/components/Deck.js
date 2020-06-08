import React, { Component, useState, useContext, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../components/AppContext';
import axios from 'axios';

export default function Deck() {
  const [state, setState] = useContext(AppContext);

  // TODO: need to get this user's userId from state, and then pass here + update axios url
  // need to store user after login to our axios req
  useEffect(() => {
    axios('/api/getProspects/1').then((prospects) => {
      console.log('Deck -> prospects.data', prospects.data);
      setState({ prospects: prospects.data });
    });
  }, []);

  const cards = [];
  state.prospects.map((user, i) => {
    cards.push(
      <Card
        id={i}
        key={i}
        className="card"
        petOwner={user.username}
        photo={user.user_id}
        details={user.name}
        location={user.location}
      />
    );
  });

  return <div className="deck">{cards}</div>;
}
