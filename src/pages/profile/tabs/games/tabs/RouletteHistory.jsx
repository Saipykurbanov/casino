import React from 'react';

const RouletteHistory = () => {
    return (
        <div className='game_history_container'>
            <div className="history_header roulette">
                <div className="bet">Ставка</div>
                <div className="color">Цвет</div>
                <div className="winning">Выигрыш</div>
            </div>

            <div className="history_list">
                <div className="history_list_item roulette">
                    <div className="bet">1000,00</div>
                    <div className="color">
                        <div className="color_item green">18</div>
                        <div className="color_item red">15</div>
                        <div className="color_item black">10</div>
                    </div>
                    <div className="winning">350, 15, 10</div>
                </div>
            </div>
        </div>
    );
};

export default RouletteHistory;