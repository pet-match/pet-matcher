import React from 'react';
// import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Card(props) {
  return (
    <div className="card">
      <img className="cardPetPic" src={
          'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg'
        }
      />
      <ul className="charDetailsList">
        <li className="charDetail">Screen Name</li>
        <li className="charDetail">Age</li>
        <li className="charDetail">Location</li>
        <li className="charDetail">Gender</li>
        {/* <li className="charDetail">Bio</li> */}
      </ul>
    </div>
  );
}
