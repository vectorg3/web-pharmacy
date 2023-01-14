import React from 'react';
import { Header } from './Header/Header';
import { Shop } from './Shop';
import { Menu } from './Header/Menu';
import { useState } from 'react';

const Hero = ({ handleLogout }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const handleMenuVisible = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <>
            {menuVisible ? (
                <Menu handleLogout={handleLogout} />
            ) : (
                <>
                    <Header
                        handleLogout={handleLogout}
                        handleMenuVisible={handleMenuVisible}
                    />
                    <Shop />
                </>
            )}
        </>
    );
};
export default Hero;
