import { CartItem } from './CartItem';
import { useContext } from 'react';
import { ShopContext } from '../../context';

function CartList() {
    const {order,  handleCartShow } = useContext(ShopContext);
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className='collection cart-list'>
            <li className='collection-item active'>Корзина</li>
            {order.length ? (
                order.map((item) => <CartItem key={item.id} {...item} />)
            ) : (
                <li className='collection-item'>Корзина пуста</li>
            )}
            <li className='collection-item active'>
                Общая стоимость: {totalPrice} руб.
            </li>
            <i className='material-icons cart-close' onClick={handleCartShow}>
                close
            </i>
        </ul>
    );
}
export { CartList };
