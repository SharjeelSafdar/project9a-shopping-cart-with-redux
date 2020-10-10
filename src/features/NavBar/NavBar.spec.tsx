import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NavBar } from './NavBar';

const renderNavBar = () => render(
    <MemoryRouter>
        <NavBar />
    </MemoryRouter>
);

describe('Tests for <NavBar />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderNavBar();
    });

    it('Displays the title "Shoe Store"', () => {
        const { getByText } = renderNavBar();
        expect( getByText('Shoes Land') ).toBeInTheDocument();
    });

    it('Contains links to pages', () => {
        const {getByTestId } = renderNavBar();
        expect( getByTestId('home-navlink') ).toBeInTheDocument();
        expect( getByTestId('men-navlink') ).toBeInTheDocument();
        expect( getByTestId('women-navlink') ).toBeInTheDocument();
        expect( getByTestId('kids-navlink') ).toBeInTheDocument();
        expect( getByTestId('cart-navlink') ).toBeInTheDocument();
    });
})