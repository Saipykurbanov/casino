import React from 'react';
import InputWithBtn from '../../../components/input/InputWithBtn';
import BetControllBtn from '../../../components/bet_controll_btn/BetControllBtn';
import Button from '../../../components/button/Button';

const SetBet = () => {
    return (
        <div className='set_bet'>
            <h2 className="game_title">КАРТОЧКИ</h2>

            <InputWithBtn 
                label={'Ставка'}
                placeholder={'0,00'}
            />

            <BetControllBtn />

            <h3>Возможный выигрыш</h3>

            <div className="possible_flex">
                <div className="possible_item">
                    от 0,00
                </div>
                <div className="possible_item">
                    до 0,00
                </div>
            </div>

            <Button mode={'full fill'}>ИГРАТЬ</Button>
        </div>
    );
};

export default SetBet;