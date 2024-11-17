import React from 'react';
import Button from '../../../components/button/Button';

const User = () => {
    return (
        <div className='user'>
            <div className="user_avatar_wrapper">
                <div className="user_avatar">
                    <img src="" alt="" />
                </div>
            </div>

            <div className='user_info_wrapper'>
                <div className="user_info">
                    <h3>Никнейм:</h3>
                    <div className="name">mcGregor122313</div>
                </div>

                <div className="user_info">
                    <h3>Email:</h3>
                    <div className="email">casino@drop.ru</div>
                </div>
            </div>

            <div className="balance_block">
                <h4>Баланс</h4>

                <p className="balance">0,00</p>

                <div className="controll_block">
                    <Button>пополнить</Button>
                    <Button mode={'fill'}>вывести</Button>
                </div>
            </div>
        </div>
    );
};

export default User;