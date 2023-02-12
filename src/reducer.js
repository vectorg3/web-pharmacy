import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import fire from './fire';

export function reducer(state, { type, payload }) {
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
    switch (type) {
        case 'HANDLE_MENU':
            return {
                ...state,
                menuVisible: !state.menuVisible,
            }
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false,
            }
        case 'TOGGLE_CART':
            return {
                ...state,
                isCartShow: !state.isCartShow,
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity - 1;
                        return {
                            ...el,
                            quantity: newQuantity >= 0 ? newQuantity : 0,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.id === payload.id) {
                        const newQuantity = el.quantity + 1;
                        return {
                            ...el,
                            quantity: newQuantity,
                        };
                    } else {
                        return el;
                    }
                }),
            };
        case 'ADD_TO_CART':
            const itemIndex = state.order.findIndex(
                (orderItem) => orderItem.id === payload.id
            );
            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = { ...payload, quantity: 1 };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            Toast.fire({
                icon: 'success',
                title: payload.name + ' успешно добавлен в корзину',
            });
            return {
                ...state,
                order: newOrder,
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id),
            };
        default:
            return state;
    }
}
