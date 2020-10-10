import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import { HomePage } from './HomePage';

const renderHomePage = (path="/") => render(
    <MemoryRouter initialEntries={[path]}>
        <HomePage />
    </MemoryRouter>
);

describe('Tests for <HomePage />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderHomePage();
    });

    it('Displays greeting', () => {
        const { getByText } = renderHomePage();
        expect( getByText(/welcome to the shoes land/i) ).toBeInTheDocument();
    });

    it('Displays a shoe as featured image', () => {
        const { getByTestId } = renderHomePage();
        expect( getByTestId('featured-shoe') ).toBeInTheDocument();
    });

    it('Displays buttons for navigation to shoes collections', () => {
        const { getByTestId } = renderHomePage();
        expect( getByTestId('men-collection') ).toHaveTextContent(/men/i);
        expect( getByTestId('women-collection') ).toHaveTextContent(/women/i);
        expect( getByTestId('kids-collection') ).toHaveTextContent(/kids/i);
    })
})