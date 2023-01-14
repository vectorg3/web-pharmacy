import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import products from '../products.json';
import { Cart } from './Cart/Cart';
import { Preloader } from './Preloader';
import { GoodsList } from './Goods/GoodsList';
import { CartList } from './Cart/CartList';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    //добавление товара в корзину

    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        Toast.fire({
            icon: 'success',
            title: item.name + ' успешно добавлен в корзину',
        });
    };
    //удаление товара из корзины
    const removeFromCart = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };
    //показать/скрыть корзину
    const handleCartShow = () => {
        setCartShow(!isCartShow);
    };

    //Загрузка товаров

    useEffect(function getGoods() {
        setGoods(products);
        setLoading(false);
    }, []);

    //
    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };
    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    return (
        <main className='container content'>
            <Cart quantity={order.length} handleCartShow={handleCartShow} />
            {loading ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToCart={addToCart} />
            )}
            {isCartShow && (
                <CartList
                    order={order}
                    handleCartShow={handleCartShow}
                    removeFromCart={removeFromCart}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
        </main>
    );
};
export { Shop };
