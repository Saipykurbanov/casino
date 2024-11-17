import React from 'react';

const CrashHistory = () => {
    return (
        <div className='game_history_container'>
            <div className="history_header crash">
                <div className="data">Дата</div>
                <div className="coef">Коэфициент</div>
                <div className="winning">Выигрыш</div>
            </div>

            <div className="history_list">
                <div className="history_list_item crash">
                    <div className="data">22:00:24</div>
                    <div className="coef">x1.45</div>
                    <div className="winning">1100</div>
                </div>
                <div className="history_list_item crash">
                    <div className="data">22:00:24</div>
                    <div className="coef">x1.45</div>
                    <div className="winning">1100</div>
                </div>
            </div>
        </div>
    );
};

export default CrashHistory;