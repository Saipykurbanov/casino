import React from 'react';

const MakeBet = () => {
    return (
        <div className='make_bet'>
            <p>Сделать ставку</p>

            <div className="flex">
                <div className="flex_item">
                    <button className='make_bet_btn green'>x14</button>

                    <p>Сумма <span>0,00</span></p>
                </div>

                <div className="flex_item">
                    <button className='make_bet_btn red'>x2</button>

                    <p>Сумма <span>0,00</span></p>
                </div>

                <div className="flex_item">
                    <button className='make_bet_btn black'>x5</button>

                    <p>Сумма <span>0,00</span></p>
                </div>
            </div>
        </div>
    );
};

export default MakeBet;