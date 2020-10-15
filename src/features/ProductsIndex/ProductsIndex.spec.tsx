import React from 'react';
import { render, cleanup, act, fireEvent, waitForDomChange } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ProductsIndex } from './ProductsIndex';
import { ProductCard } from './ProductCard';
import createMockingStore from '../../store/mockingStore';
import { ProductDetails } from '../ProductDetails/ProductDetails';

const renderProductsIndex = (path="/") => render(
    <MemoryRouter initialEntries={[path]}>
        <ReduxProvider store={createMockingStore()}>
            <Routes>
                <Route path="/:category" element={<ProductsIndex />} />
                <Route path="/:category/:shoeId" element={<ProductDetails />} />
            </Routes>
        </ReduxProvider>
    </MemoryRouter>
);

const renderCard = (shoeId: string) => render(
    <MemoryRouter>
        <ReduxProvider store={createMockingStore()}>
            <ProductCard shoeId={shoeId} />
        </ReduxProvider>
    </MemoryRouter>
);

describe('Tests for <ProductsIndex />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderProductsIndex();
    });

    it('Displays heading correctly: 1', () => {
        const { getByTestId } = renderProductsIndex('/men');
        expect( getByTestId('heading') ).toHaveTextContent("Men's Shoes");
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
        const { getByText, getByTestId } = renderCard("3f60de24-1815-4d88-a8dc-5ceda3f41bdc");
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
        expect( getByText("Category: Men's Shoes") ).toBeInTheDocument();
        expect( getByText("$115") ).toBeInTheDocument();
        expect( getByTestId('add-btn') ).toHaveTextContent(/add to cart/i);
        expect( getByTestId('details-btn') ).toHaveTextContent(/product details/i);
    });

    it('Product Details button in <ProductCard /> works correctly', () => {
        const { getAllByTestId, getByText } = renderProductsIndex('/men');
        expect( getByText("Men's Shoes") ).toBeInTheDocument();
        
        act(() => {fireEvent.click(getAllByTestId('details-btn')[0])});
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
    });

    it('Notification appears when shoe is added to cart', () => {
        const { getByText, getByTestId, getAllByTestId } = renderProductsIndex('/men');
        
        act(() => {fireEvent.click( getAllByTestId('add-btn')[2] )});
        expect( getByTestId('notification') ).toBeInTheDocument();
        expect( getByText('Added Successfully') ).toBeInTheDocument();
    });
})