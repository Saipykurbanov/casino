import React from 'react';
import HistoryItem from './HistoryItem';

const History = () => {
    return (
        <div className='coins_history'>
            <h3>История игр</h3>

            <div className="hostory_list">
                <div className='history_item head'>
                    <div className="player">Игрок</div>
                    <div className="bet">Ставка</div>
                    <div className="hit">Попаданий</div>
                    <div className="coef">Коэфф.</div>
                    <div className="win">Выигрыш</div>
                    <div></div>
                </div>
                <HistoryItem />
                <HistoryItem />
                <HistoryItem />

            </div>
        </div>
    );
};

export default History;