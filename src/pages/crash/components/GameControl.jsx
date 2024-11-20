import React from 'react';
import Button from '../../../components/button/Button';
import InputWithBtn from '../../../components/input/InputWithBtn';
import Input from '../../../components/input/Input';
import Bet from '../../../utils/Bet';

const GameControl = ({toggle, bet, setBet, setCoef, coef}) => {



    return (
        <div className='game_control'>
            <div className="game_inputs">
                <h2>Crash-up</h2>
                <InputWithBtn onChange={(e) => Bet.onChange(e.target.value, setBet)} label={'Ставка'} placeholder={'0.00'} value={bet} setValue={setBet}/>
                <Input label={'Коэффициент'} placeholder={'0.00'} onChange={(e) => Bet.onChange(e.target.value, setCoef)} value={coef}/>
            </div>

            <Button mode={'full fill'} callback={toggle}>
                ИГРАТЬ
            </Button>
        </div>
    );
};

export default GameControl;