import {useEffect, useContext } from 'react';
import { ShopContext } from '../context';
import products from '../products.json';
import { Cart } from './Cart/Cart';
import { Preloader } from './Preloader';
import { GoodsList } from './Goods/GoodsList';
import { CartList } from './Cart/CartList';

const Shop = () => {
    const {goods, loading, order, isCartShow, setGoods} = useContext(ShopContext);

    useEffect(function getGoods() {
        setGoods(products);
    }, []);



    return (
        <main className='container content'>
            <Cart quantity={order.length}/>
            {loading ? <Preloader /> : <GoodsList/>}
            {isCartShow && (
                <CartList/>
            )}
        </main>
    );
};
export { Shop };
