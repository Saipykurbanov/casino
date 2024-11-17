import React from 'react';

const Operation = () => {

    return (
        <div className='common_wrapper operation'>
            <div className="common_header operation">
                <div className="type">Тип</div>
                <div className="description">Описание</div>
                <div className="summ">Сумма</div>
                <div className="data">Дата</div>
            </div>

            <div className="common_list">
                <div className="list_item operation">
                    <div className="type">депозит</div>
                    <div className="description">Описание</div>
                    <div className="summ">100000000,00</div>
                    <div className="data">24.05.2024</div>
                </div>
            </div>
        </div>
    );
};

export default Operation;