import React from 'react';
import Button from '../../../components/button/Button';
import InputWithBtn from '../../../components/input/InputWithBtn';
import Input from '../../../components/input/Input';

const GameControl = () => {
    return (
        <div className='game_control'>
            <div className="game_inputs">
                <h2>Crash</h2>
                <InputWithBtn label={'Ставка'} placeholder={'0.00'}/>
                <Input label={'Коэффициент'} placeholder={'0.00'}/>
            </div>

            <Button mode={'full fill'}>
                ИГРАТЬ
            </Button>
        </div>
    );
};

export default GameControl;