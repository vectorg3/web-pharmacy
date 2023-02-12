import { useContext } from 'react';
import { ShopContext } from '../../context';

function Cart() {
    const {order, handleCartShow} =useContext(ShopContext);
    const quantity = order.length;
    return (
        <div className='cart' onClick={handleCartShow}>
            <i className='material-icons' style={{ color: 'white' }}>
                shopping_cart
            </i>
            <span style={{ margin: '10px', fontSize: 16, color: 'white' }}>
                Корзина
            </span>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}
export { Cart };
