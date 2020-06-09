import React, { Component, useState, useContext, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../components/AppContext';
import axios from 'axios';

export default function Deck() {
  const [state, setState] = useContext(AppContext);

  // Our Axios GET request to our DB for user 1
  useEffect(() => {
    axios(`/api/getProspects/1`).then((prospects) => {
      console.log('Deck -> prospects.data', prospects.data);
      // copy our state object and assign data to prospect properties
      setState({ ...state, prospects: prospects.data });
    });
  }, []);

  // =======================
  // CORRECT QUERY
  // =======================

  // useEffect(() => {
  //   axios(`/api/getProspects/${state.currentUserId}`).then((prospects) => {
  //     console.log('Deck -> prospects.data', prospects.data);
  //     setState({ ...state, prospects: prospects.data });
  //   });
  // }, []);

  // Declare empty array and push our Card child components,
  // Each with their own unique key, id, and values from DBQuery
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
