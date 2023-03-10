import './CartStyles.css';
import { useContext } from 'react';
import { ShopContext } from '../../context';
function CartItem(props) {
    const { id, name, full_background, price, quantity } = props;
    const { removeFromCart, incQuantity, decQuantity } =
        useContext(ShopContext);
    return (
        <li className='collection-item avatar cart__item'>
            <img src={full_background} alt='' class='circle' />
            <div className='cart__item-title'>{name}</div>
            <p>
                Кол-во:
                <span
                    className='quantity__btn'
                    onClick={() => {
                        decQuantity(id);
                    }}
                >
                    -
                </span>
                <span className='cart__quantity'>{quantity}</span>
                <span
                    className='quantity__btn'
                    onClick={() => {
                        incQuantity(id);
                    }}
                >
                    +
                </span>
                = {price * quantity} руб.
            </p>

            <span
                className='secondary-content remove-item'
                onClick={() => removeFromCart(id)}
            >
                <i className='material-icons cart-delete'>close</i>
            </span>
        </li>
    );
}
export { CartItem };
