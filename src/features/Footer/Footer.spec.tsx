import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Footer } from './Footer';

describe('Tests for <Footer />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        render(<Footer />);
    });

    it('Renders a link icon to Github repository', () => {
        const { getByTestId } = render(<Footer />);
        const gitLink = getByTestId('git-link');
        expect( gitLink ).toBeInTheDocument();
        expect( gitLink ).toHaveAttribute('href', 'https://github.com/SharjeelSafdar/project9a-shopping-cart-with-redux');
    })
})