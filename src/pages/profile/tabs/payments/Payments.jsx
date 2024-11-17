import React from 'react';

const Payments = () => {
    return (
        <div className='common_wrapper payments'>
            <div className="common_header payments">
                <div className="name">Имя</div>
                <div className="pay">К оплате</div>
                <div className="way">Способ</div>
                <div className="status">Статус</div>
                <div className="data">Дата</div>
            </div>

            <div className="common_list">
                <div className="list_item payments">
                    <div className="name">Александр</div>
                    <div className="pay">2500</div>
                    <div className="way">способ</div>
                    <div className="status">статус</div>
                    <div className="data">12:30 20.04.2024</div>
                </div>
            </div>
        </div>
    );
};

export default Payments;