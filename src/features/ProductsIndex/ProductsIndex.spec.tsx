import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ProductsIndex } from './ProductsIndex';
import { ProductCard } from './ProductCard';
import store from '../../store/store';

const renderProductsIndex = (path="/") => render(
    <MemoryRouter initialEntries={[path]}>
        <ReduxProvider store={store}>
            <Routes>
                <Route path="/:category" element={<ProductsIndex />} />
            </Routes>
        </ReduxProvider>
    </MemoryRouter>
);

const renderCard = () => render(
    <ReduxProvider store={store}>
        <ProductCard shoeId="3f60de24-1815-4d88-a8dc-5ceda3f41bdc" />
    </ReduxProvider>
);

describe('Tests for <ProductsIndex />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderProductsIndex();
    });

    it('Displays heading correctly: 1', () => {
        const { getByText } = renderProductsIndex('/men');
        expect( getByText("Men's Shoes") ).toBeInTheDocument();
    });

    it('Displays heading correctly: 1', () => {
        const { getByText } = renderProductsIndex('/women');
        expect( getByText("Women's Shoes") ).toBeInTheDocument();
    });

    it('Displays heading correctly: 1', () => {
        const { getByText } = renderProductsIndex('/kids');
        expect( getByText("Kids' Shoes") ).toBeInTheDocument();
    });

    it('Displays shoe cards', () => {
        const { getAllByTestId } = renderProductsIndex('/men');
        expect( getAllByTestId('shoe-card').length ).toBeGreaterThan(0);
    });

    it('Displays a shoe card correctly', () => {
        const { getByText, getByTestId } = renderCard();
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
        expect( getByText("Category: Men's Shoes") ).toBeInTheDocument();
        expect( getByText("$115") ).toBeInTheDocument();
        expect( getByTestId('add-btn') ).toHaveTextContent(/add to cart/i);
        expect( getByTestId('details-btn') ).toHaveTextContent(/product details/i);
    });
})