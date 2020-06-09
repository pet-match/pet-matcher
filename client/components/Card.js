// CARD.JS file
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip'; // do further research on how reactFlip works
import Button from '@material-ui/core/Button'; // do further research on how materialUi works
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import FrontCard from './FrontCard';
import BackCard from './BackCard';
// styling for our button
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Card(props) {
  // allows for styling button
  const classes = useStyles();
  // set state for flipping our cards
  const [isFlipped, setIsFlipped] = useState(false); // research react-hooks useState
  // create handleClick function that triggers the variable isFlipped to true/false; handles flips between each card
  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    // hint: look at the imports
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontCard
        handleClick={handleClick}
        photo={props.photo}
        details={props.details}
      />
      {/* on click switches to back card */}
      <BackCard
        handleClick={handleClick}
        petOwner={props.petOwner}
        photo={props.photo}
        details={props.details}
        location={props.location}
      />
    </ReactCardFlip>
  );
}
