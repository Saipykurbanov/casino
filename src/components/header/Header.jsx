import React from 'react';
import './css/header.css';
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';


const Header = () => {
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
                        <Button>
                            Войти
                        </Button>
                        <Button mode={'fill'}>
                            Регистрация
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;