import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

const SetBet = () => {
    return (
        <div className="set_bet">
            <Input label={'Ставка'}/>

            <div className="flex">
                <Button mode={'fill flex'}>x2</Button>
                <Button mode={'fill flex'}>/2</Button>
                <Button mode={'fill flex'}>мин</Button>
                <Button mode={'fill flex'}>макс</Button>
            </div>
        </div>
    );
};

export default SetBet;