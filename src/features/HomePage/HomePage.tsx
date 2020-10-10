import React from 'react';

import { FeatureImage } from './FeatureImage';
import { Collections } from './Collections';

export const HomePage: React.FC<{}> = () => {
    
    return (
        <div>
            <FeatureImage />
            <Collections />
        </div>
    )
}
