import React from 'react';
// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./client/img/pic${props.photo}.jpg`} className="cardPetPic" />
      <div className="cardDetails">{props.details}</div>
      <div className="cardAge">{props.location}</div>
      <div>Owner: {props.petOwner}</div>
    </div>
  );
}
