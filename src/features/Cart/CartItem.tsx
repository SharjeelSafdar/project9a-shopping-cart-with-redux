import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toggleInclude, decrementQuantity, incrementQuantity, removeFromCart } from './cartSlice';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import styles from './CartItem.module.css';

interface Props {
    item: CartItem;
}

export const CartItem: React.FC<Props> = ({ 
    item: { id, name, price, category, image, quantity, includedInSum }
}) => {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const categoryId = category === "Men's Shoes" ? 'men' : category === "Woman's Shoes" ? 'women' : 'kids';
    return (
        <div className={styles.container} data-testid="cart-item">
            <div className={styles.left}>
                <div className={styles.checkAndImg}>
                    <input
                        type="checkbox"
                        title="Include in grand total."
                        checked={includedInSum}
                        onChange={() => dispatch( toggleInclude({ id }) )}
                        data-testid="include"
                    />
                    <img
                        src={image}
                        alt="shoe"
                        title={name}
                        onClick={() => navigateTo(`/${categoryId}/${id}`)}
                        data-testid="shoe-image"
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div 
                    className={styles.nameAndCategory}
                    onClick={() => navigateTo(`/${categoryId}/${id}`)}
                    data-testid="shoe-name"
                >
                    <p>{name}</p>
                    <p>{category}</p>
                </div>
                <div className={styles.quantity}>
                    <p>Quantity</p>
                    <div>
                        <button
                            onClick={() => dispatch( decrementQuantity({ id }) )}
                            title="Decrement quantity"
                            data-testid="decrement-quantity"
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => dispatch( incrementQuantity({ id }) )}
                            title="Increment quantity"
                            data-testid="increment-quantity"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className={styles.delete}>
                    <button 
                        onClick={() => dispatch( removeFromCart({ id }) )}
                        title="Remove from cart."
                        data-testid="delete-btn"
                    >
                        <RiDeleteBin2Fill />
                    </button>
                </div>
                <div className={styles.price}>
                    <p>{`$${quantity*price}`}</p>
                    <p>{`$${price} x ${quantity}`}</p>
                </div>
            </div>
        </div>
    )
}
