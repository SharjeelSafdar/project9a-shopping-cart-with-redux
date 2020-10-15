import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ProductCard } from './ProductCard';
import { RootState } from '../../store/rootReducer';
import styles from './ProductsIndex.module.css';

export const ProductsIndex: React.FC<{}> = () => {
    const { category } = useParams();
    const ids = useSelector((state: RootState) => Object.keys(
        category === 'men' ? state.products.men :
        category === 'women' ? state.products.women :
        category === 'kids' ? state.products.kids : {}
    ));

    const pageHeading = (
        category === 'men' 
            ? "Men's Shoes" 
            : category === "women"
                ? "Women's Shoes"
                : category === 'kids'
                    ? "Kids' Shoes"
                    : "Page not found"
    );
    return (
        <div className={styles.container} data-testid="products-index-page">
            <h2 className={styles.heading} data-testid="heading">{pageHeading}</h2>
            <div className={styles.cards}>
                {ids && ids.map( id => (
                    <ProductCard shoeId={id} key={id} />
                ))}
            </div>
        </div>
    )
}
