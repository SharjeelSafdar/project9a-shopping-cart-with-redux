import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Notification } from '../';
import { batchRemove } from './cartSlice';
import { RootState } from '../../store/rootReducer';
import styles from './Cart.module.css';
import { CartItem } from './CartItem';

export const Cart: React.FC<{}> = () => {
    const cartItems: CartItem[] = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const [ numPreviousItems, setNumPreviousItems ] = useState(cartItems.length);
    const [ showNotification, setShowNotification ] = useState(false);

    useEffect(() => {
        if (cartItems.length < numPreviousItems) {
            setShowNotification(true)
            setTimeout(() => setShowNotification(false), 4000);
            setNumPreviousItems(cartItems.length);
        }
        else if (cartItems.length > numPreviousItems) {
            setNumPreviousItems(cartItems.length);
        }
    }, [cartItems.length, numPreviousItems]);
    
    const grandTotal = cartItems.length === 0 ? 0 :
        cartItems
            .map(item => item.includedInSum ? item.price * item.quantity : 0)
            .reduce((itemPrice, accPrice) => accPrice + itemPrice);

    const checkoutHandler = () => {
        const checkoutShoesIds = 
            cartItems
                .filter( item => item.includedInSum )
                .map( item => item.id );
        dispatch( batchRemove({ ids: checkoutShoesIds }) );
        navigateTo('/cart/checkout');
    }
    return (
        <div className={styles.container} data-testid="cart-page">
            <h2 className={styles.heading}>Shopping Cart</h2>
            <div className={styles.subContainer}>
                <p className={styles.numItems}>{`You have ${cartItems.length} items in your cart.`}</p>
                {cartItems.map(item => <CartItem item={item} key={item.id} />)}
                <p className={styles.grandTotal}>
                    <span>Grand Total</span>
                    <span data-testid="grand-total">{`$${grandTotal}`}</span>
                </p>
                <div className={styles.checkoutBtnWrapper}>
                    <button
                        className={styles.checkout}
                        disabled={grandTotal <= 0}
                        onClick={() => checkoutHandler()}
                        title="Proceed to checkout"
                        data-testid="checkout-btn"
                    >
                        Checkout
                    </button>
                </div>
            </div>
            {showNotification
                ? <Notification type="REMOVE" />
                : null
            }
        </div>
    )
}
