import React from 'react';
import GameHistory from './components/GameHistory';
import SetBet from './components/SetBet';
import SlotGame from './components/SlotGame';

import './css/slots.css'

const Slots = () => {
    return (
        <div className='slots_page'>

            <div className="slot_game_wrapper">
                <SetBet />

                <SlotGame />
            </div>

            <GameHistory />
        </div>
    );
};

export default Slots;