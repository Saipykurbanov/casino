import React from 'react';
import { NavLink } from 'react-router-dom';

const UserHeader = () => {

    return (
        <div className="user_header_wrapper">
            <nav className='user_header'>
                <NavLink to={'/profile/games/'} className={'tab_link'}>Игры</NavLink>
                <NavLink to={'/profile/operation'} className={'tab_link'}>Операции</NavLink>
                <NavLink to={'/profile/payments'} className={'tab_link'}>Платежи</NavLink>
                <NavLink to={'/profile/withdraw'} className={'tab_link'}>Выводы</NavLink>
                <NavLink to={'/profile/partner'} className={'tab_link'}>Партнерка</NavLink>
            </nav>
        </div>
    );
};

export default UserHeader;