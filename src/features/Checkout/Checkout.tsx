import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import styles from './Checkout.module.css';

export const Checkout: React.FC<{}> = () => {
    const navigaterTo = useNavigate();
    return (
        <div className={styles.container} data-testid="checkout-page">
            <p>You have successfully checkedout.</p>
            <p>Thank you for trusting us.</p>
            <button
                onClick={() => navigaterTo('/')}
                data-testid="back-to-home"
            >
                <FaHome /> Back to Home
            </button>
        </div>
    )
}
