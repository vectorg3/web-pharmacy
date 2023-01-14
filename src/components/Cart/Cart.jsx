function Cart(props) {
    const { quantity = 0, handleCartShow = Function.prototype } = props;
    return (
        <div className='cart' onClick={handleCartShow}>
            <i className='material-icons' style={{ color: 'white' }}>shopping_cart</i>
            <span style={{margin: '10px', fontSize: 16, color: 'white'}}>Корзина</span>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : null}
        </div>
    );
}
export { Cart };
