import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';

import styles from './Notification.module.css';

interface Props {
    type: 'ADD' | 'REMOVE';
    shoeName: string;
    shoeImage: string;
}

export const Notification: React.FC<Props> = ({ type, shoeName, shoeImage }) => {
    return (
        <div
            className={styles.container}
            style={{borderBottom: `6px solid ${type === 'ADD' ? '#33cf33' : '#ff5d4b'}`}}
            data-testid="notification"
        >
            <div className={styles.meta}>
                <p className={styles.msg}>{`${type === 'ADD' ? 'Added' : 'Removed'} Successfully`}</p>
                <div className={styles.shoeData}>
                    <img src={shoeImage} alt="" className={styles.image} data-testid="shoe-image" />
                    <p className={styles.name}>{shoeName}</p>
                </div>
            </div>
            <div
                className={styles.icon}
                style={{color: type === 'ADD' ? '#33cf33' : '#ff5d4b'}}
            >
                {type === 'ADD' ? <ImCheckmark /> : <ImCross />}
            </div>
        </div>
    )
}
