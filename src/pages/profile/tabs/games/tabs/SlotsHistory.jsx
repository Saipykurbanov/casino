import React from 'react';

const SlotsHistory = () => {
    return (
        <div className='game_history_container'>
            <div className="history_header slots">
                <div className="bet">Ставка</div>
                <div className="winning">Выигрыш</div>
            </div>

            <div className="history_list">
                <div className="history_list_item slots">
                    <div className="bet">1000,00</div>
                    <div className="winning">350</div>
                </div>
            </div>
        </div>
    );
};

export default SlotsHistory;