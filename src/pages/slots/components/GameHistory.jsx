import React from 'react';
import BetListItem from './BetListItem';

const GameHistory = () => {
    return (
        <div className='slots_game_history'>
            <h2>История игр</h2>

            <div className="bet_list_header">
                <div className="player">Игрок</div>

                <div className="bet">Ставка</div>

                <div className="winning">Выигрыш</div>

                <div className="detail"></div>
            </div>

            <div className="bet_list">
                <BetListItem />
                <BetListItem />
                <BetListItem />
                <BetListItem />
                <BetListItem />
                <BetListItem />
            </div>
        </div>
    );
};

export default GameHistory;