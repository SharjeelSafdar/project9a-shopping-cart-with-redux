import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaHome, FaBaby, FaShoppingCart } from 'react-icons/fa';
import { GiMale, GiFemale } from 'react-icons/gi';

import classNames from 'classnames/bind';
import styles from './NavBar.module.css';
const cx = classNames.bind(styles);

export const NavBar: React.FC<{}> = () => {
    const [ isChecked, setCheckBox ] = useState(false);
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>
                <Link to="./" data-testid="logo-navlink">
                    Shoes Land
                </Link>
            </h1>
            <label htmlFor="checkbox" className={styles.menuBtnWrapper}>
                <div 
                    className={cx({
                        menuBtn: true, 
                        closeBtn: isChecked,
                        openBtn: !isChecked,
                    })} 
                />
            </label>
            <input 
                type="checkbox" 
                id="checkbox" 
                className={styles.checkbox} onChange={() => setCheckBox(prev => !prev)} 
            />
            <div className={styles.links}>
                <NavLink to="./">
                    <button data-testid="home-navlink" className={styles.link}>
                        {<FaHome />} Home
                    </button>
                </NavLink>
                <NavLink to="./men" activeClassName={styles.activeLink}>
                    <button data-testid="men-navlink" className={styles.link}>
                        {<GiMale />} Men
                    </button>
                </NavLink>
                <NavLink to="./women" activeClassName={styles.activeLink}>
                    <button data-testid="women-navlink" className={styles.link}>
                        {<GiFemale />} Women
                    </button>
                </NavLink>
                <NavLink to="./kids" activeClassName={styles.activeLink}>
                    <button data-testid="kids-navlink" className={styles.link}>
                        {<FaBaby />} Kids
                    </button>
                </NavLink>
                <NavLink to="./cart" activeClassName={styles.activeLink}>
                    <button data-testid="cart-navlink" className={styles.link}>
                        {<FaShoppingCart />} Cart
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
