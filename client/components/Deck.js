import React, { Component } from 'react';
import Card from './Card';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username : {}
      userCount: [1, 2, 3, 4, 5],
    };

    // handleLike()
    // handleDelete()
    //
  }

  render() {
    const cards = [];
    for (let i = 0; i < this.state.userCount.length; i++) {
      cards.push(<Card key={i} id={i} />);
      console.log(cards);
    }
    return <div>{cards}</div>;
  }
}

export default Deck;

// username, age, desc, photo
