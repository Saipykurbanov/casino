import React from 'react';
import Button from '../button/Button';
import './css/input.css';
import Bet from '../../utils/Bet';

const InputWithBtn = ({onChange, value, onBlur, label, mode, placeholder, setValue}) => {
    return (
        <div className={`input_field ${mode}`}>
            <label htmlFor="">{label}</label>
            <div className="input_wrapper">
                <input type="text" onChange={onChange} value={value} onBlur={onBlur} placeholder={placeholder}/>
                <div className="button_block">
                    <Button mode={`small pink`} callback={() => Bet.multiply(setValue)}>
                        x2
                    </Button>
                    <Button mode={`small pink`} callback={() => Bet.divide(setValue)}>
                        /2
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InputWithBtn;