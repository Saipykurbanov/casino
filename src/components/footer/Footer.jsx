import React from 'react';
import Statistic from './components/Statistic';
import './css/footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    
    return (
        <footer>

            <Statistic />

            <div className="logo">LOGO.</div>

            <nav>
                <NavLink to="">Пользовательское соглашение</NavLink>
                <NavLink to="">Политика конфиденциальности</NavLink>
                <NavLink to="">Правила ставок</NavLink>
                <NavLink to="">AML policy</NavLink>
                <NavLink to="">KYC policy</NavLink>
                <NavLink to="">Политика вывода средств</NavLink>
                <NavLink to="">Бонусная политика</NavLink>
            </nav>

            <div className="copyright">
                "A" SPINE INVESTMENTS LIMITED, a company, whose registered office is at Μυκηνών, 10, Floor 4, Flat/Office 41 1065, Λευκωσία, Κύπρος Cyprus
            </div>

        </footer>
    );
};

export default Footer;