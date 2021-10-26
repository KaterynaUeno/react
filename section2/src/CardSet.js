import React, { Component } from "react";
import Card from "./Card";

class CardSet extends Component {
  constructor() {
    super();
    this.state = {
      chosenCards: [],
    };
  }

  saveCourse = (index) => {
    // console.log(index);
    const copyOfCards = [...this.state.chosenCards];
    copyOfCards.push(this.props.cards[index]);
    this.setState({
      chosenCards: copyOfCards,
    });
  };
  render() {
    // console.log(this.state.chosenCards);

    const savedCards = this.state.chosenCards.map((card, index) => {
      return <h2 key={index}>{card.course}</h2>;
    });
    const cardList = this.props.cards.map((card, index) => {
      return (
        <div className="col s2" key={index}>
          <Card card={card} />
          <button
            onClick={() => {
              this.saveCourse(index);
            }}
            className="btn waves-light waves-effect"
          >
            choose
          </button>
        </div>
      );
    });
    return (
      <div>
        {cardList}
        {savedCards}
      </div>
    );
  }
}

export default CardSet;
