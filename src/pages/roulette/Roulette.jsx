import React from 'react';
import Timer from './components/Timer';
import Last from './components/Last';
import RouletteGame from './components/RouletteGame';
import SetBet from './components/SetBet';
import MakeBet from './components/MakeBet';
import BetList from './components/BetList';
import useRoulette from './hooks/useRoulette';

import './css/roulette.css'

const Roulette = () => {

    const roulette = useRoulette()

    return (
        <div className='roulette_page'>
            <div className="roulette_head">
                <Timer />

                <Last />
            </div>

            <RouletteGame rouletteRef={roulette.rouletteRef}/>

            <div className="set_bet_block">
                <SetBet />

                <MakeBet />
            </div>

            <div className="bet_block">
                <BetList coef={'x14'} mode={'green'} commonBet={'20000'}/>
                <BetList coef={'x2'} mode={'red'} commonBet={'20000'}/>
                <BetList coef={'x5'} mode={'black'} commonBet={'20000'}/>
            </div>
        </div>
    );
};

export default Roulette;