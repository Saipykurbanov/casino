import React from 'react';
import money_case from '/icons/money_case.svg'
import BetListItem from './BetListItem';

const BetList = ({coef, mode, betList, commonBet}) => {
    return (
        <div className='bet_list_block'>
            <div className="common_bet">
                Общая ставка:

                <div className="bet">
                    <img src={money_case} alt="" />
                    {commonBet}
                </div>
            </div>

            <div className={`make_bet_btn ${mode}`}>{coef}</div>

            <div className="bet_list">
                <BetListItem name={'mcGregor'} img={''} bet={'-1000,00'}/>
                <BetListItem name={'mcGregor'} img={''} bet={'-1000,00'}/>
                <BetListItem name={'mcGregor'} img={''} bet={'-1000,00'}/>
                <BetListItem name={'mcGregor'} img={''} bet={'-1000,00'}/>
            </div>
        </div>
    );
};

export default BetList;