import React from 'react';

const Withdraw = () => {
    return (
        <div className='common_wrapper withdraw'>
            <div className="common_header withdraw">
                <div className="user_id">id</div>
                <div className="summ">Сумма</div>
                <div className="way">Способ</div>
                <div className="wallet">Кошелёк</div>
                <div className="status">Статус</div>
                <div className="data">Дата</div>
            </div>

            <div className="common_list">
                <div className="list_item withdraw">
                    <div className="user_id">1384ji7wr7rlsyewrnr</div>
                    <div className="summ">100,00</div>
                    <div className="way">способ</div>
                    <div className="wallet">кошелек</div>
                    <div className="status">статус</div>
                    <div className="data">12:30 20.04.2024</div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;