import React from 'react';
import './css/crash.css';
import Window from './components/Window';
import GameControl from './components/GameControl';
import UsersBets from './components/UsersBets';


const Crash = () => {



    return (
        <div className='crash'>

            <div className="crash_game">

                <GameControl />
                <Window />

            </div>

            <UsersBets />
        </div>
    );
};

export default Crash;