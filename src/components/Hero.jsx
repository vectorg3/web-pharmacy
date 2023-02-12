import React from 'react';
import { Header } from './Header/Header';
import { Shop } from './Shop';
import { Menu } from './Header/Menu';
import { useContext } from 'react';
import { ShopContext } from '../context';

const Hero = ({ handleLogout}) => {
    const { menuVisible } = useContext(ShopContext);
    return (
        <>
            <Header handleLogout={handleLogout} />
            <>
                <Menu handleLogout={handleLogout}/>
                <Shop />
            </>
        </>
    );
};
export default Hero;
