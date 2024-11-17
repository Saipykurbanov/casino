import React, { useEffect, useState } from 'react';
import './css/header.css';
import Button from '../button/Button';
import { NavLink } from 'react-router-dom';
import Store from '../../utils/Store';
import GamesList from './components/GamesList';


const Header = () => {

    const [isOpen, setIsOpen] = useState('close')

    const toggleList = (e) => {
        e.stopPropagation()
        if(isOpen === 'open') {
            setIsOpen('close')
        } else {
            setIsOpen('open')
        }
    }

    const closeList = () => {
        setIsOpen('close')
    }

    const open = (e, data) => {
        e.stopPropagation()
        Store.setListener('signIn', data)
    }

    useEffect(() => {
        window.addEventListener('click', closeList)

        return () => {
            window.removeEventListener('click', closeList)
        }
    }, [])

    return (
        <header>
            <div className="container">
                <div className="header_wrapper">
                    <nav>
                        <NavLink to={'/'} className="logo">
                            <img src="/images/LOGO.svg" alt="" />
                        </NavLink>
                        <NavLink to={'/'} className="link">Главная</NavLink>
                        <div className="link games">
                            <div className="games_btn" onClick={toggleList}>
                                <p>Игры</p>
                                <span>&#10095;</span>
                            </div>

                            <GamesList isOpen={isOpen}/>
                        </div>
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