function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToCart = Function.prototype,
    } = props;
    return (
        <div className='card'>
            <div
                className='card-image'
                style={{ height: 250, overflow: 'hidden' }}
            >
                <img src={full_background} alt={name} style={{padding: 10}} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() => addToCart({ id, name, price, full_background})}
                >
                    Купить
                </button>
                <span className='right' style={{ fontSize: '1.5rem' }}>
                    {price} руб.
                </span>
            </div>
        </div>
    );
}
export { GoodsItem };
