import React, { useState } from 'react';
import './css/crash.css';
import Window from './components/Window';
import GameControl from './components/GameControl';
import UsersBets from './components/UsersBets';


const Crash = () => {

    const [status, setStatus] = useState('')

    const toggle = () => {
        if(status === 'play') {
            setStatus('')
        } else {
            setStatus('play')
        }
    }

    return (
        <div className='crash'>

            <div className="crash_game">

                <GameControl toggle={toggle}/>
                <Window status={status}/>

            </div>

            <UsersBets />
        </div>
    );
};

export default Crash;