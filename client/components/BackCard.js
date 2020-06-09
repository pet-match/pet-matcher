// BackCard.js
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
// styling for our button
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
export default function BackCard(props) {
  // allows for styling button
  const classes = useStyles();
  // set state for flipping our cards
  const [isFlipped, setIsFlipped] = useState(false);
  // create handle click and map to our button on card component
  return (
    // set our flip status to be false, initially, flip dir is horizontal
    <div onClick={props.handleClick}>
      <div className="card">
        <div className="cardDetails">{props.details}</div>
        <div className="cardAge">{props.location}</div>
        <div>Owner: {props.petOwner}</div>
      </div>
    </div>
  );
}
