import React from 'react';

const MonetHistory = () => {
    return (
        <div className='game_history_container'>
            <div className="history_header monet">
                <div className="bet">Ставка</div>
                <div className="hit">Попадания</div>
                <div className="coef">Коэфф.</div>
                <div className="winning">Выигрыш</div>
            </div>

            <div className="history_list">
                <div className="history_list_item monet">
                    <div className="bet">2.0</div>
                    <div className="hit">1</div>
                    <div className="coef">x1.8</div>
                    <div className="winning">350</div>
                </div>
                <div className="history_list_item monet">
                    <div className="bet">2.0</div>
                    <div className="hit">1</div>
                    <div className="coef">x1.8</div>
                    <div className="winning">350</div>
                </div>
            </div>
        </div>
    );
};

export default MonetHistory;