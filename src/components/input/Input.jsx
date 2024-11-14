import React from 'react';
import './css/input.css';

const Input = ({onChange, value, onBlur, label, mode}) => {

    return (
        <div className={`input_field ${mode}`}>
            <label htmlFor="">{label}</label>
            <input type="text" onChange={onChange} value={value} onBlur={onBlur}/>
        </div>
    );
};

export default Input;