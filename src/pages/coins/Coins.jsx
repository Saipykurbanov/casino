import React from 'react';
import './css/coins.css';
import GameControl from './components/GameControl';
import Window from './components/Window';
import History from './components/History';


const Coins = () => {
    return (
        <div className='coins'>

            <div className="coins_game">

                <GameControl />
                <Window />

            </div>

            <History />

        </div>
    );
};

export default Coins;