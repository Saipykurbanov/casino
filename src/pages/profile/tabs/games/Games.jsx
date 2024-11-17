import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './css/games.css';

const Games = () => {
    return (
        <div className='common_wrapper game_history'>
            <div className="games_header">
                <NavLink to={'/profile/games/'} className={'games_header_item'} end>КРЭШ</NavLink>
                <NavLink to={'cards'} className={'games_header_item'}>КАРТОЧКИ</NavLink>
                <NavLink to={'monet'} className={'games_header_item'}>МОНЕТКА</NavLink>
                <NavLink to={'slots'} className={'games_header_item'}>СЛОТЫ</NavLink>
                <NavLink to={'roulette'} className={'games_header_item'}>РУЛЕТКА</NavLink>
            </div>

            <Outlet />
        </div>
    );
};

export default Games;