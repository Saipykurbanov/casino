import React from 'react';
import Button from '../button/Button';
import trash from '/icons/trash.svg'

import './css/bet_controll_btn.css'

const BetControllBtn = () => {
    return (
        <div className='bet_controll_btn'>
            <Button mode={'fill small'}>+1</Button>
            <Button mode={'fill small'}>+10</Button>
            <Button mode={'fill small'}>+100</Button>
            <Button mode={'fill small'}>+1000</Button>
            <Button mode={'red small flex'}>
                <img src={trash} alt="" />
            </Button>
        </div>
    );
};

export default BetControllBtn;