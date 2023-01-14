function Menu ({handleLogout}) {
    return(
        <div>
            <ul className='mobile__menu'>
                    <li className='menu__item'>Заказы</li>
                    <li className='menu__item'>Личный кабинет</li>
                    <li className='menu__item' onClick={handleLogout}>
                        Выйти
                    </li>
                </ul>
        </div>
    )
}
export {Menu};