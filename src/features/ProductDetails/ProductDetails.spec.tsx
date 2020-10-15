import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { ProductDetails } from './ProductDetails';
import createMockingStore, { initialTestState } from '../../store/mockingStore';

const initialEntries = [
    ...Object.keys(initialTestState.products.men).map( shoeId => `/men/${shoeId}` ),
    ...Object.keys(initialTestState.products.women).map( shoeId => `/women/${shoeId}` ),
    ...Object.keys(initialTestState.products.kids).map( shoeId => `/kids/${shoeId}` ),
];
enum TestEntries {
    MEN_SHOE_0,
    MEN_SHOE_1,
    MEN_SHOE_2,
    WOMEN_SHOE_0,
    WOMEN_SHOE_1,
    WOMEN_SHOE_2,
    KIDS_SHOE_0,
    KIDS_SHOE_1,
    KIDS_SHOE_2,
}

const renderComp = (shoe: TestEntries) => render(
    <MemoryRouter initialEntries={initialEntries} initialIndex={shoe}>
        <ReduxProvider store={createMockingStore()}>
            <Routes>
                <Route path="/:category/:shoeId" element={<ProductDetails />} />
            </Routes>
        </ReduxProvider>
    </MemoryRouter>
);

describe('Tests for <App />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderComp(TestEntries.MEN_SHOE_1);
    });

    it('Displays shoe data correctly', () => {
        const { getAllByTestId, getByText, getByTestId } = renderComp(TestEntries.MEN_SHOE_1);
        
        expect( getAllByTestId('shoe-image').length ).toBeGreaterThanOrEqual(1);
        expect( getByText('Nike Air Zoom-Type') ).toBeInTheDocument();
        expect( getByText("Men's Shoes") ).toBeInTheDocument();
        expect( getByText(
            "Description: Celebrate Nike innovation and sports heritage in the Nike Air Zoom-Type. It brings a deconstructed, DIY aesthetic to the streets with its zigzag stitching, and colors inspired by Japan's street culture. The stacked foam at the heel and contrast-colored Zoom Air cushioning at the forefoot use the same technology used by the world's elite athletes for an unparalleled ride."
        )).toBeInTheDocument();
        expect( getByTestId('increment-btn') ).toBeInTheDocument();
        expect( getByText('1') ).toBeInTheDocument();
        expect( getByTestId('decrement-btn') ).toBeInTheDocument();
        expect( getByText('$150') ).toBeInTheDocument();
        expect( getByText('$150 x 1') ).toBeInTheDocument();
        expect( getByTestId('addtocart-btn') ).toBeInTheDocument();
        expect( getByTestId('gotocart-btn') ).toBeInTheDocument();
    });

    it('Increment quantity button works correctly', () => {
        const { getByText, getByTestId } = renderComp(TestEntries.MEN_SHOE_0);
        const incrementBtn = getByTestId('increment-btn');
        // Initially quantity should be 1.
        expect( getByText('1') ).toBeInTheDocument();
        expect( getByText('$115') ).toBeInTheDocument();
        
        act(() => {fireEvent.click(incrementBtn)});
        expect( getByText('2') ).toBeInTheDocument();
        expect( getByText('$230') ).toBeInTheDocument();
        
        act(() => {fireEvent.click(incrementBtn)});
        expect( getByText('3') ).toBeInTheDocument();
        expect( getByText('$345') ).toBeInTheDocument();
    });

    it('Decrement quantity button works correctly', () => {
        const { getByText, getByTestId } = renderComp(TestEntries.MEN_SHOE_0);
        const incrementBtn = getByTestId('increment-btn');
        const decrementBtn = getByTestId('decrement-btn');
        // Initially quantity should be 1.
        expect( getByText('1') ).toBeInTheDocument();
        expect( decrementBtn ).toBeDisabled();
        
        act(() => {fireEvent.click(incrementBtn)});
        act(() => {fireEvent.click(incrementBtn)});
        expect( getByText('3') ).toBeInTheDocument();
        expect( getByText('$345') ).toBeInTheDocument();
        expect( decrementBtn ).toBeEnabled();
        
        act(() => {fireEvent.click(decrementBtn)});
        expect( getByText('2') ).toBeInTheDocument();
        expect( getByText('$230') ).toBeInTheDocument();

        act(() => {fireEvent.click(decrementBtn)});
        expect( getByText('1') ).toBeInTheDocument();
        expect( getByText('$115') ).toBeInTheDocument();
        expect( decrementBtn ).toBeDisabled();
    });

    it('Notification appears when shoe is added to cart', () => {
        const { getByText, getByTestId } = renderComp(TestEntries.MEN_SHOE_0);
        
        act(() => {fireEvent.click( getByTestId('addtocart-btn') )});
        expect( getByTestId('notification') ).toBeInTheDocument();
        expect( getByText('Added Successfully') ).toBeInTheDocument();
    });
});