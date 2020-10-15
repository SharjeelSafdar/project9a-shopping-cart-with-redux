import React from 'react';
import { ImCheckmark, ImCross } from 'react-icons/im';

import styles from './Notification.module.css';

interface Props {
    type: 'ADD' | 'REMOVE';
}

export const Notification: React.FC<Props> = ({ type }) => {
    return (
        <div
            className={styles.container}
            style={{borderBottom: `6px solid ${type === 'ADD' ? '#33cf33' : '#ff5d4b'}`}}
            data-testid="notification"
        >
            <p className={styles.msg}>{`${type === 'ADD' ? 'Added' : 'Removed'} Successfully`}</p>
            <div
                className={styles.icon}
                style={{color: type === 'ADD' ? '#33cf33' : '#ff5d4b'}}
            >
                {type === 'ADD' ? <ImCheckmark /> : <ImCross />}
            </div>
        </div>
    )
}
