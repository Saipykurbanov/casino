import React from 'react';
import './css/header.css';
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';
import Store from '../../utils/Store';


const Header = () => {

    const open = (e, data) => {
        e.stopPropagation()
        Store.setListener('signIn', data)
    }

    return (
        <header>
            <div className="container">
                <div className="header_wrapper">
                    <nav>
                        <NavLink to={'/'} className="logo">
                            <img src="/images/LOGO.svg" alt="" />
                        </NavLink>
                        <NavLink to={'/'} className="link">Игры</NavLink>
                        <NavLink to={'/sdsd'} className="link">Рефералы</NavLink>
                        <NavLink to={'/sdsd'} className="link">Промоакции</NavLink>
                    </nav>
                    <div className="button_block">
                        <Button callback={(e) => open(e, 1)}>
                            Войти
                        </Button>
                        <Button mode={'fill'} callback={(e) => open(e, 2)}>
                            Регистрация
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;