import React/* , { useRef } */ from 'react';
// import useWebAnimation, { rubberBand } from '@wellyshen/use-web-animations';

import styles from './FeatureImage.module.css';
import shoeImg from '../../images/feature-image-shoe.png';

export const FeatureImage: React.FC<{}> = () => {
    // const ref = useRef<HTMLImageElement>(null);
    // const { ref: shoeAnimRef } = useWebAnimation({
    //     ...rubberBand,
    //     ref,
    //     onFinish: ({ animation }) => setInterval(() => animation.play(), 3000),
    //     playbackRate: 0.85,
    //     timing: {
    //         ...rubberBand.timing,
    //         delay: 2000,
    //     }
    // })
    return (
        <div className={styles.featureImage}>
            <h2 className={styles.greeting}>Welcome to the Shoes Land</h2>
            <img 
                src={shoeImg}
                className={styles.featureShoe}
                // ref={process.env.NODE_ENV !== 'test' ? shoeAnimRef : null}
                alt=""
                title=""
                data-testid="featured-shoe"
            />
        </div>
    )
}
