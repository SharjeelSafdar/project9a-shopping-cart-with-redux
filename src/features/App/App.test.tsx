import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './App';
import store from '../../store/store';

const renderApp = (path?: string) => render(
    <MemoryRouter initialEntries={!!path ? [path] : undefined}>
        <ReduxProvider store={store}>
            <App />
        </ReduxProvider>
    </MemoryRouter>
);

describe('Tests for <App />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderApp();
    });

    it("Renders Men's shows at '/men' ", () => {
        const { getByText, getByTestId, getAllByTestId } = renderApp('/men');
        expect( getByText("Men's Shoes") ).toBeInTheDocument();
        expect( getByTestId('products-index-page') ).toBeInTheDocument();
        expect( getAllByTestId('shoe-card').length ).toBeGreaterThan(0);
    });

    it("Renders Women's shows at '/women' ", () => {
        const { getByText, getByTestId, getAllByTestId } = renderApp('/women');
        expect( getByText("Women's Shoes") ).toBeInTheDocument();
        expect( getByTestId('products-index-page') ).toBeInTheDocument();
        expect( getAllByTestId('shoe-card').length ).toBeGreaterThan(0);
    });

    it("Renders Kids' shows at '/kids' ", () => {
        const { getByText, getByTestId, getAllByTestId } = renderApp('/kids');
        expect( getByText("Kids' Shoes") ).toBeInTheDocument();
        expect( getByTestId('products-index-page') ).toBeInTheDocument();
        expect( getAllByTestId('shoe-card').length ).toBeGreaterThan(0);
    });

    it("Navigation buttons in <NavBar /> work correctly", () => {
        const { getByText, getByTestId } = renderApp();
        expect( getByTestId('home-page') ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('men-navlink'))});
        expect( getByText("Men's Shoes") ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('women-navlink'))});
        expect( getByText("Women's Shoes") ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('kids-navlink'))});
        expect( getByText("Kids' Shoes") ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('home-navlink'))});
        expect( getByTestId('home-page') ).toBeInTheDocument();
        
        // act(() => {fireEvent.click( getByTestId('cart-navlink'))});
        // expect( getByTestId('cart-page') ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('logo-navlink'))});
        expect( getByTestId('home-page') ).toBeInTheDocument();
    });

    it("Link to Men's Shoes in <HomePage /> work correctly", () => {
        const { getByText, getByTestId } = renderApp();

        act(() => {fireEvent.click( getByTestId('men-collection'))});
        expect( getByText("Men's Shoes") ).toBeInTheDocument();
    });

    it("Link to Women's Shoes in <HomePage /> work correctly", () => {
        const { getByText, getByTestId } = renderApp();

        act(() => {fireEvent.click( getByTestId('women-collection'))});
        expect( getByText("Women's Shoes") ).toBeInTheDocument();
    });

    it("Link to Kids' Shoes in <HomePage /> work correctly", () => {
        const { getByText, getByTestId } = renderApp();

        act(() => {fireEvent.click( getByTestId('kids-collection'))});
        expect( getByText("Kids' Shoes") ).toBeInTheDocument();
    });
})
