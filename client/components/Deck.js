import React, { Component, useState, useContext, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../components/AppContext';
import axios from 'axios';

export default function Deck() {
  const [state, setState] = useContext(AppContext);
  const handleClick = () =>
    console.log('Current State isLogged in: ', state.isLoggedIn);

  const [prospects, setProspects] = useState([]);

  // TODO: install axios globally if don't have it
  // TODO: need to get this user's userId from state, and then pass here + update axios url
  useEffect(() => {
    axios('/api/getProspects/1').then((prospects) => {
      console.log('Deck -> prospects.data', prospects.data);
      setProspects(prospects.data);
    });
  }, []);

  const cards = [];
  prospects.map((user, i) => {
    cards.push(
      <Card
        id={i}
        key={i}
        className="card"
        petOwner={user.username}
        photo={user.user_id}
        details={user.name}
        location={user.location}
        onClick={handleClick}
      />
    );
  });

  return <div className="deck">{cards}</div>;

  // TODO: fix sql query to include both owner and pet names
  // return ( <div className="deck" onClick={handleClick}>
  //            {prospects.map((user, i )=> (
  //               <div key={user.username} className="card">
  //                 <img src={`/client/img/pic${i}.jpg`} className="cardPetPic" />
  //                 <div className="cardDetails">{user.name}</div>
  //               </div>
  //            ))}
  //         </div>
  // );
}

// username, age, desc, photo

// if (!cards) return (
//   <div>
//     <h1>Loading data, please wait...</h1>
//   </div>
// );

// if (!cards.length) return (
//   <div>No prospects found...take your pet out for a walk and smile at strangers. You never know!!!</div>
// );

// if (!Array.isArray(prospects)) notes = [];
