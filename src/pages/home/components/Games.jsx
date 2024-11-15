import React from 'react';
import { NavLink } from 'react-router-dom';

const Games = () => {
    return (
        <div className='games_block'>
            <h2>
                <svg width="34.000000" height="24.000000" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs/>
                    <path id="path" d="M33.89 17.17L31.92 7.38C30.91 3.02 27.53 0 23.66 0L10.33 0C6.46 0 3.08 3.02 2.07 7.38L0.1 17.17C-0.41 19.98 0.98 22.79 3.33 23.68L3.44 23.72C5.61 24.54 7.98 23.48 9.12 21.18L10.84 18.21C11.27 17.34 12.07 16.8 12.93 16.8L21.06 16.8C21.92 16.8 22.72 17.34 23.15 18.21L24.87 21.18C26.01 23.48 28.38 24.54 30.55 23.72L30.66 23.68C33.01 22.79 34.4 19.98 33.89 17.17ZM12.68 10.61L9.91 10.61L9.91 13.84L7.5 13.84L7.5 10.61L4.73 10.61L4.73 7.8L7.5 7.8L7.5 4.57L9.91 4.57L9.91 7.8L12.68 7.8L12.68 10.61ZM24.88 3.9C25.72 3.9 26.4 4.69 26.4 5.67C26.4 6.65 25.72 7.44 24.88 7.44C24.04 7.44 23.36 6.65 23.36 5.67C23.36 4.69 24.04 3.9 24.88 3.9ZM21.85 10.97C21.01 10.97 20.33 10.18 20.33 9.2C20.33 8.23 21.01 7.44 21.85 7.44C22.68 7.44 23.36 8.23 23.36 9.2C23.36 10.18 22.68 10.97 21.85 10.97ZM24.88 14.51C24.04 14.51 23.36 13.72 23.36 12.74C23.36 11.76 24.04 10.97 24.88 10.97C25.72 10.97 26.4 11.76 26.4 12.74C26.4 13.72 25.72 14.51 24.88 14.51ZM27.91 10.97C27.08 10.97 26.4 10.18 26.4 9.2C26.4 8.23 27.08 7.44 27.91 7.44C28.75 7.44 29.43 8.23 29.43 9.2C29.43 10.18 28.75 10.97 27.91 10.97Z" fill="#00ADB5" fill-opacity="1.000000" fill-rule="nonzero"/>
                </svg>
                Games mode
            </h2>

            <div className="games_grid">
                <NavLink to={'/crash'} className="games_grid_item a">
                    <h4>CRASH</h4>
                    <img src="/images/noimage.png" alt="" />
                </NavLink>

                <NavLink to={''} className="games_grid_item b">
                    <h4>СЛОТЫ</h4>
                    <img src="/images/noimage.png" alt="" />
                </NavLink>

                <NavLink to={'/roulette'} className="games_grid_item c">
                    <h4>РУЛЕТКА</h4>
                    <img src="/images/noimage.png" alt="" />
                </NavLink>

                <NavLink to={'/cards'} className="games_grid_item d">
                    <h4>КАРТОЧКИ</h4>
                    <img src="/images/noimage.png" alt="" />
                </NavLink>

                <NavLink to={''} className="games_grid_item e">
                    <h4>МОНЕТКА</h4>
                    <img src="/images/noimage.png" alt="" />
                </NavLink>
            </div>
        </div>
    );
};

export default Games;