// CARD.JS file
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Button from '@material-ui/core/Button';
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
  const [isFlipped, setIsFlipped] = useState(false);
  // create handle click and map to our button on card component
  // console.log('on Card.js ---> :', props)
  const handleClick = () => {
    console.log('i am clicked');
    return setIsFlipped(!isFlipped);
  };
  // set our flip status to be false, initially, flip dir is horizontal
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FrontCard
        handleClick={handleClick}
        // petOwner={props.petOwner}
        photo={props.photo}
        details={props.details}
        // location={props.location}
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
