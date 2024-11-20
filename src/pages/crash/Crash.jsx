import React, { useState } from 'react';
import './css/crash.css';
import Window from './components/Window';
import GameControl from './components/GameControl';
import UsersBets from './components/UsersBets';
import useCrash from './hooks/useCrash';


const Crash = () => {

    const crash = useCrash()

    return (
        <div className='crash'>

            <div className="crash_game">

                <GameControl toggle={crash.toggle} bet={crash.bet} setBet={crash.setBet} setCoef={crash.setCoef} coef={crash.coef}/>
                <Window status={crash.status}/>

            </div>

            <UsersBets />
        </div>
    );
};

export default Crash;