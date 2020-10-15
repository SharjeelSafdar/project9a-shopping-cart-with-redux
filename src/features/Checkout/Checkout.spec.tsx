import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Checkout } from './Checkout';
import { HomePage } from '../';

enum Paths {
    HOME_PAGE,
    CHECKOUT_PAGE,
}
const paths = [
    '/',
    '/cart/checkout',
];

const renderCheckout = (path: number) => render(
    <MemoryRouter initialEntries={paths} initialIndex={path}>
        <Routes>
            <Route path={paths[0]} element={<HomePage />} />
            <Route path={paths[1]} element={<Checkout />} />
        </Routes>
    </MemoryRouter>
);

describe('Test for <Checkout />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderCheckout(Paths.CHECKOUT_PAGE);
    });

    it('Link to <HomePage /> works correctly', () => {
        const { getByTestId } = renderCheckout(Paths.CHECKOUT_PAGE);
        const homeBtn = getByTestId('back-to-home');
        expect( homeBtn ).toBeInTheDocument();

        act(() => {fireEvent.click(homeBtn)});
        expect( getByTestId('home-page') ).toBeInTheDocument();
    });
});