import React from 'react';
import { Link } from 'react-router-dom';
import men from '../../images/men.png';
import women from '../../images/women.png';
import kids from '../../images/kids.png';
import styles from './Collections.module.css';

export const Collections: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Our Collections</h2>
            <div className={styles.tiles}>
                <Link to="/men">
                    <div data-testid="men-collection" className={styles.tile}>
                        <img src={men} alt="" title="Men's Shoes" />
                        <p>Men</p>
                    </div>
                </Link>
                <Link to="/women">
                    <div data-testid="women-collection" className={styles.tile}>
                        <img src={women} alt="" title="Women's Shoes" />
                        <p>Women</p>
                    </div>
                </Link>
                <Link to="/kids">
                    <div data-testid="kids-collection" className={styles.tile}>
                        <img src={kids} alt="" title="Kids' Shoes" />
                        <p>Kids</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
