import React, { Component, useState, useContext, useEffect } from 'react';
import Card from './Card';
import { AppContext } from '../components/AppContext';
import axios from 'axios';

export default function Deck() {
  const [state, setState] = useContext(AppContext);
  const handleClick = () =>  console.log('Current State isLogged in: ', state.isLoggedIn);
  
  const [prospects, setProspects] = useState([]);

  // TODO: install axios if you don't have it
  // TODO: need to get this user's userId from state, and then pass here + update axios url
  useEffect( () => {
    axios('/api/getProspects/1')
      .then( prospects => {
        console.log("Deck -> prospects.data", prospects.data) 
        setProspects(prospects.data);
      })
    }, []);

  // for (let i = 0; i < 4; i++) {
  //   cards.push(<Card key={i} id={i}/>);
  // }

  // TODO: fix sql query to include both owner and pet names
  return ( <div className="deck" onClick={handleClick}>
             {prospects.map(user => (
                <div key={user.username} className="card">
                  {/* <img src={user.image} className="cardPetPic" /> */}
                  <div className="cardDetails">{user.name}</div>
                </div>
             ))}
          </div>
  ); 
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
