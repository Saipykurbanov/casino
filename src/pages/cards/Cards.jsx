import React from 'react';
import SetBet from './components/SetBet';
import CardGame from './components/CardGame';
import GameHistory from './components/GameHistory';

import './css/cards.css';

const Cards = () => {

    return (
        <div className='cards_page'>

            <div className="card_game_wrapper">
                <SetBet />

                <CardGame />
            </div>

            <GameHistory />

        </div>
    );
};

export default Cards;