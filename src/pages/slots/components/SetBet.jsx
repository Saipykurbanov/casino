import React from 'react';
import InputWithBtn from '../../../components/input/InputWithBtn';
import BetControllBtn from '../../../components/bet_controll_btn/BetControllBtn';
import Button from '../../../components/button/Button';

const SetBet = () => {
    return (
        <div className='set_bet'>
            <h2 className="game_title">Слоты</h2>

            <InputWithBtn 
                label={'Ставка'}
                placeholder={'0,00'}
            />

            <BetControllBtn />

            <Button mode={'full fill'}>ИГРАТЬ</Button>
        </div>
    );
};

export default SetBet;