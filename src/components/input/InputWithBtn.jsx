import React from 'react';
import Button from '../button/Button';

const InputWithBtn = ({onChange, value, onBlur, label, mode}) => {
    return (
        <div className={`input_field ${mode}`}>
            <label htmlFor="">{label}</label>
            <div className="input_wrapper">
                <input type="text" onChange={onChange} value={value} onBlur={onBlur}/>
                <div className="button_block">
                    <Button mode={`small pink`}>
                        x2
                    </Button>
                    <Button mode={`small pink`}>
                        /2
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InputWithBtn;