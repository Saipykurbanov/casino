import React from 'react';
import Button from '../../../components/button/Button';
import InputWithBtn from '../../../components/input/InputWithBtn';
import Bet from '../../../utils/Bet';

const GameControl = ({side, setSide, bet, setBet}) => {

    console.log(bet)

    return (
        <div className='game_control'>
            <div className="game_inputs">
                <h2>МОНЕТКА</h2>
                <div className="input_block">
                    <InputWithBtn onChange={(e) => Bet.onChange(e.target.value, setBet)} label={'Ставка'} placeholder={'0.00'} value={bet} setValue={setBet}/>
                    <div className="control_buttons">
                        <Button mode={'full fill small'} callback={() => Bet.plus(1, setBet)}>+1</Button>
                        <Button mode={'full fill small'} callback={() => Bet.plus(10, setBet)}>+10</Button>
                        <Button mode={'full fill small'} callback={() => Bet.plus(100, setBet)}>+100</Button>
                        <Button mode={'full fill small'} callback={() => Bet.plus(1000, setBet)}>+1000</Button>
                        <Button mode={'full fill small flex red'} callback={() => Bet.clear(setBet)}>
                            <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <clipPath id="clip16_106">
                                        <rect id="trash-bin-trash-svgrepo-com (2).svg" width="18.000000" height="18.000000" fill="white" fill-opacity="0"/>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#clip16_106)">
                                    <path id="path" d="M2.25 4.78C2.25 4.42 2.5 4.13 2.82 4.13L4.82 4.13C5.22 4.11 5.57 3.83 5.7 3.4L5.81 3.03C5.87 2.85 5.91 2.7 5.98 2.56C6.23 2 6.7 1.62 7.24 1.52C7.38 1.49 7.52 1.49 7.69 1.5L10.3 1.5C10.47 1.49 10.61 1.49 10.75 1.52C11.29 1.62 11.76 2 12.02 2.56C12.08 2.7 12.12 2.85 12.18 3.03L12.26 3.33C12.4 3.75 12.84 4.12 13.24 4.13L15.17 4.13C15.49 4.13 15.75 4.42 15.75 4.78C15.75 5.15 15.49 5.44 15.17 5.44L2.82 5.44C2.5 5.44 2.25 5.15 2.25 4.78Z" fill="#EEEEEE" fill-opacity="1.000000" fill-rule="nonzero"/>
                                    <path id="path" d="M8.69 16.5L9.3 16.5C11.39 16.5 12.43 16.5 13.11 15.83C13.79 15.17 13.86 14.08 13.99 11.9L14.19 8.76C14.27 7.57 14.31 6.98 13.97 6.61C13.63 6.23 13.05 6.23 11.9 6.23L6.09 6.23C4.94 6.23 4.36 6.23 4.02 6.61C3.68 6.98 3.72 7.57 3.8 8.76L4 11.9C4.13 14.08 4.2 15.17 4.88 15.83C5.56 16.5 6.6 16.5 8.69 16.5ZM7.68 9.14C7.65 8.81 7.37 8.57 7.06 8.61C6.75 8.64 6.53 8.93 6.56 9.25L6.94 13.2C6.97 13.53 7.24 13.76 7.55 13.73C7.86 13.7 8.09 13.41 8.05 13.08L7.68 9.14ZM10.93 8.61C11.24 8.64 11.46 8.93 11.43 9.25L11.05 13.2C11.02 13.53 10.75 13.76 10.44 13.73C10.13 13.7 9.9 13.41 9.94 13.08L10.31 9.14C10.34 8.81 10.62 8.57 10.93 8.61Z" fill="#EEEEEE" fill-opacity="1.000000" fill-rule="evenodd"/>
                                </g>
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className="coins_block">
                    <div className={`coin_item ${side === 1 ? 'active' : ''}`} onClick={() => setSide(1)}>
                        <img src="/images/up.png" alt="" />
                        <p>Решка</p>
                    </div>
                    <div className={`coin_item ${side === 2 ? 'active' : ''}`} onClick={() => setSide(2)}>
                        <img src="/images/x.png" alt="" />
                        <p>Орёл</p>
                    </div>
                </div>
            </div>
            <Button mode={'fill full'}>
                ИГРАТЬ
            </Button>
        </div>
    );
};

export default GameControl;