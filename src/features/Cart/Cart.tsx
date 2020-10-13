import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/rootReducer';
import styles from './Cart.module.css';
import { CartItem } from './CartItem';

export const Cart: React.FC<{}> = () => {
    const cartItems: CartItem[] = useSelector((state: RootState) => state.cart);
    const grandTotal = cartItems.length === 0 ? 0 :
        cartItems
            .map(item => item.includedInSum ? item.price * item.quantity : 0)
            .reduce((itemPrice, accPrice) => accPrice + itemPrice);
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
                        onClick={() => {}}
                        title="Proceed to checkout"
                        data-testid="checkout-btn"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}
