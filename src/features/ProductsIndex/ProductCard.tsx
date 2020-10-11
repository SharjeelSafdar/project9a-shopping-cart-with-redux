import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { FaCartPlus } from 'react-icons/fa';
import { MdDescription } from 'react-icons/md';
import styles from './ProductCard.module.css';

interface Props {
    shoeId: string;
}

export const ProductCard: React.FC<Props> = ({ shoeId }) => {
    const shoe: ShoeData = useSelector((state: RootState) => state.products.shoesById[shoeId]);
    return (
        <div className={styles.card} data-testid="shoe-card">
            <img src={shoe.images[0]} alt="shoe" title={shoe.name} className={styles.shoeImage} />
            <p className={styles.shoeName}>{shoe.name}</p>
            <p className={styles.shoeCategory}>{`Category: ${shoe.category}`}</p>
            <p className={styles.shoePrice}>{shoe.price}</p>
            <button className={styles.addToCart} data-testid="add-btn">
                <FaCartPlus /> Add to Cart
            </button>
            <button className={styles.details} data-testid="details-btn">
                <MdDescription /> Product Details
            </button>
        </div>
    )
}
