import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import Bet from '../../../utils/Bet';

const SetBet = ({ bet, setBet, error, setError }) => {

    const changeBet = (value, callback) => {
        setError(false)
        Bet.onChange(value, callback)
    }

    const multiBet = (callback) => {
        setError(false)
        Bet.multiply(callback)
    }

    const divideBet = (callback) => {
        setError(false)
        Bet.divide(callback)
    }

    const maxBet = (stat, callback) => {
        setError(false)
        Bet.maxBet(stat, callback)
    }

    const minBet = () => {
        setError(false)
        setBet(prev => prev = 0.1)
    }

    return (
        <div className="set_bet">
            <Input 
                label={'Ставка'} 
                placeholder={'0,00'}
                value={(bet)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                onChange={(e) => changeBet(e.target.value, setBet)}
            />

            <div className="flex">
                <Button mode={'fill flex'} callback={() => multiBet(setBet)}>x2</Button>
                <Button mode={'fill flex'} callback={() => divideBet(setBet)}>/2</Button>
                <Button mode={'fill flex'} callback={() => minBet()}>мин</Button>
                <Button mode={'fill flex'} >макс</Button>
            </div>
        </div>
    );
};

export default SetBet;