import React from 'react';
import Button from '../../components/button/Button';
import './css/not_found.css';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="not_found">
            <h2>404</h2>
            <p>Страница не найдена...</p>
            <NavLink to={'/'}>
                <Button mode={'fill'}>
                    На главную
                </Button>
            </NavLink>
        </div>
    );
}

export default NotFound;