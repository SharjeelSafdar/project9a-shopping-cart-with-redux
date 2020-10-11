import React from 'react';

import { FeatureImage } from './FeatureImage';
import { Collections } from './Collections';

export const HomePage: React.FC<{}> = () => {
    
    return (
        <div data-testid="home-page">
            <FeatureImage />
            <Collections />
        </div>
    )
}
