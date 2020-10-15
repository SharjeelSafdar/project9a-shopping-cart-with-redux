import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';

import { Notification } from '../';
import { RootState } from '../../store/rootReducer';
import { addToCart } from '../Cart/cartSlice';
import styles from './ProductDetails.module.css';

export const ProductDetails: React.FC<{}> = () => {
    const { shoeId } = useParams();
    const navigateTo = useNavigate();
    const shoeData = useSelector((state: RootState) => state.products.shoesById[shoeId]);
    const dispatch = useDispatch();
    const [ quantity, setQuantity] = useState(1);
    const [ activeImage, setActiveImage ] = useState(0);
    const [ showNotification, setShowNotification ] = useState(false);

    const addHandler = () => {
        const shoeItem: CartItem = {
            id: shoeId,
            name: shoeData.name,
            price: +shoeData.price.slice(1),
            category: shoeData.category,
            image: shoeData.images[0],
            quantity,
            includedInSum: false,
        };
        dispatch( addToCart(shoeItem) );

        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
    }
    return (
        <div className={styles.container} data-testid="details-page">
            <div className={styles.imagesContainer}>
                <img src={shoeData.images[activeImage]} alt="shoe" className={styles.displayImage} />
                <div className={styles.images}>
                    {shoeData.images.map( (image, iii) => (
                        <img 
                            src={image}
                            onClick={() => setActiveImage(iii)}
                            alt="shoe" 
                            title={`${shoeData.name}`}
                            className={cx(styles.image, (activeImage === iii) ? styles.activeImage : null)}
                            data-testid="shoe-image"
                            key={`${shoeId}-${iii}`}
                        /> 
                    ))}
                </div>
            </div>
            <div className={styles.meta}>
                <p className={styles.name}>{shoeData.name}</p>
                <p className={styles.category}>{shoeData.category}</p>
                <p className={styles.description}>{`Description: ${shoeData.description}`}</p>
                <div className={styles.quantity}>
                    <button
                        className={styles.decrement}
                        data-testid="decrement-btn"
                        onClick={() => setQuantity( current => current<=1 ? current : (current - 1) )}
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <span className={styles.quantity}>{quantity}</span>
                    <button
                        className={styles.increment} 
                        data-testid="increment-btn"
                        onClick={() => setQuantity( current => current + 1)}
                    >
                        +
                    </button>
                </div>
                <p className={styles.price}>{`$${+shoeData.price.slice(1) * quantity}`}</p>
                <p className={styles.priceCalc}>{`${shoeData.price} x ${quantity}`}</p>
                <div className={styles.cartBtns}>
                    <button
                        className={styles.addToCart}
                        data-testid="addtocart-btn"
                        onClick={() => addHandler()}
                    >
                        <FaCartPlus /> Add To Cart
                    </button>
                    <button
                        className={styles.goToCart}
                        data-testid="gotocart-btn"
                        onClick={() => navigateTo('/cart')}
                    >
                        <FaShoppingCart /> Go To Cart
                    </button>
                </div>
            </div>
            {showNotification
                ? <Notification type="ADD" />
                : null
            }
        </div>
    )
}
