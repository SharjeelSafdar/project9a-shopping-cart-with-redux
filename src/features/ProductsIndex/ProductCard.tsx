import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';

import { Notification } from '../';
import { RootState } from '../../store/rootReducer';
import { addToCart } from '../Cart/cartSlice';
import styles from './ProductCard.module.css';

interface Props {
    shoeId: string;
}

export const ProductCard: React.FC<Props> = ({ shoeId }) => {
    const shoe: ShoeData = useSelector((state: RootState) => state.products.shoesById[shoeId]);
    const dispatch = useDispatch();
    const { category } = useParams();
    const navigateTo = useNavigate();
    const [ showNotification, setShowNotification ] = useState(false);

    const add = () => {
        const item: CartItem = {
            id: shoeId,
            name: shoe.name,
            price: +shoe.price.slice(1),
            category: shoe.category,
            image: shoe.images[0],
            quantity: 1,
            includedInSum: false,
        };
        dispatch( addToCart(item) );

        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
    }

    return (
        <div className={styles.card} data-testid="shoe-card">
            <img src={shoe.images[0]} alt="shoe" title={shoe.name} className={styles.shoeImage} />
            <p className={styles.shoeName}>{shoe.name}</p>
            <p className={styles.shoeCategory}>{`Category: ${shoe.category}`}</p>
            <p className={styles.shoePrice}>{shoe.price}</p>
            <button
                onClick={() => add()}
                className={styles.addToCart}
                data-testid="add-btn"
            >
                <FaCartPlus /> Add to Cart
            </button>
            <button
                className={styles.details}
                onClick={() => navigateTo(`/${category}/${shoeId}`)}
                data-testid="details-btn"
            >
                <MdDescription /> Product Details
            </button>
            {showNotification
                ? <Notification type="ADD" />
                : null
            }
        </div>
    )
}
