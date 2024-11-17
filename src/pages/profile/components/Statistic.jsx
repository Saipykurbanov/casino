import React from 'react';
import cup from '/icons/profile/cup.svg'
import group from '/icons/profile/group.svg'
import game from '/icons/profile/game.svg'

const Statistic = () => {
    return (
        <div className='statistic'>

            <div className="statistic_item">
                <img src={game} alt="" />

                <div>
                    <h4>Всего игр</h4>
                    <p>1000</p>
                </div>
            </div>

            <div className="statistic_item">
                <img src={cup} alt="" />

                <div>
                    <h4>Всего выиграно</h4>
                    <p>0,00</p>
                </div>
            </div>

            <div className="statistic_item">
                <img src={group} alt="" />

                <div>
                    <h4>Рефералы</h4>
                    <p>0</p>
                </div>
            </div>
            
        </div>
    );
};

export default Statistic;