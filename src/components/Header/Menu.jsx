import './Menu.css';
import { useContext } from 'react';
import { ShopContext } from '../../context';

function Menu() {
    const {menuVisible, handleLogout, currUser} = useContext(ShopContext);
    return (
        <ul className={menuVisible ? 'mobile__menu active' : 'mobile__menu'}>
            <li className='menu__item'>Заказы</li>
            <li className='menu__item'>Личный кабинет</li>
            <li className='menu__item' onClick={handleLogout}>
                Выйти
            </li>
        </ul>
    );
}
export { Menu };
