import React from 'react';
import './css/coins.css';
import GameControl from './components/GameControl';
import Window from './components/Window';
import History from './components/History';
import useCoins from './hooks/useCoins';


const Coins = () => {

    const coins = useCoins()

    return (
        <div className='coins'>

            <div className="coins_game">

                <GameControl side={coins.side} setSide={coins.setSide} bet={coins.bet} setBet={coins.setBet}/>
                <Window />

            </div>

            <History />

        </div>
    );
};

export default Coins;