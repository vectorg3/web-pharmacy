import React from 'react';
import '../Header/Header.css';
import { useContext } from 'react';
import { ShopContext } from '../../context';

function Header({handleLogout}) {
    const {handleMenuVisible, menuVisible} = useContext(ShopContext);
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
                    {menuVisible ? 'close' : 'menu'}
                </i>
            </div>
        </div>
    );
}
export { Header };
