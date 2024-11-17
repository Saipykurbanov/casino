import React from 'react';

const CardsHistory = () => {
    return (
        <div className='game_history_container'>
            <div className="history_header cards">
                <div className="bet">Ставка</div>
                <div className="provably_winning">Возможный выигрыш</div>
                <div className="winning">Выигрыш</div>
            </div>

            <div className="history_list">
                <div className="history_list_item cards">
                    <div className="bet">1000,00</div>
                    <div className="provably_winning">2,00 - 15,00</div>
                    <div className="winning">0,25</div>
                </div>
                <div className="history_list_item cards">
                    <div className="bet">1000,00</div>
                    <div className="provably_winning">2,00 - 15,00</div>
                    <div className="winning">0,25</div>
                </div>
            </div>
        </div>
    );
};

export default CardsHistory;