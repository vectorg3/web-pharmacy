import React from 'react';
import '../Header/Header.css';
import logo from '../logo.png';

function Header({ handleLogout, handleMenuVisible }) {
    return (
        <div className='nav'>
            <div className='nav__wrapper'>
                <div className='nav__logo nav__item'>PharmBuy</div>
                <ul className='nav__list'>
                    <li className='nav__item'>Заказы</li>
                    <li className='nav__item'>Личный кабинет</li>
                    <li className='nav__item' onClick={handleLogout}>
                        Выйти
                    </li>
                </ul>
                <i
                    className='material-icons nav__burger'
                    style={{ fontSize: 50 }}
                    onClick={handleMenuVisible}
                >
                    menu
                </i>
            </div>
        </div>
    );
}
export { Header };
