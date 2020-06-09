import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
// styling for our button
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
// props passed in from Card.js
export default function FrontCard(props) {
  // allows for styling button
  const classes = useStyles();
  // set state for flipping our cards
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <div className="card" onClick={props.handleClick}>
        <img
          src={`./client/img/pic${props.photo}.jpg`}
          className="cardPetPic"
        />
        <div className="cardDetails">{props.details}</div>
        <div className="cardAge">{props.location}</div>
      </div>
    </div>
  );
}
