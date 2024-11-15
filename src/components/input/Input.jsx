import React from 'react';
import './css/input.css';

const Input = ({onChange, value, onBlur, label, mode, placeholder}) => {

    return (
        <div className={`input_field ${mode}`}>
            <label htmlFor="">{label}</label>
            <input type="text" onChange={onChange} value={value} onBlur={onBlur} placeholder={placeholder}/>
        </div>
    );
};

export default Input;