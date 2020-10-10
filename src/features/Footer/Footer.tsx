import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <p>Demo Web App Using Redux Toolkit</p>
            <p>By</p>
            <p>Mian Muhammad Sharjeel Safdar</p>
            <a
                className={styles.git}
                href="https://github.com/SharjeelSafdar/project9a-shopping-cart-with-redux"
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
                data-testid="git-link"
            >
                <FaGithub />
            </a>
        </div>
    )
}
