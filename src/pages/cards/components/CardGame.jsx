import React from 'react';
import card from '/images/card.png'

const CardGame = () => {
    return (
        <div className='card_game'>
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
            <img src={card} alt="" className="card_item" />
        </div>
    );
};

export default CardGame;