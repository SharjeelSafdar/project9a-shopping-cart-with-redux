import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { App } from './App';
import createMockingStore from '../../store/mockingStore';

const renderApp = (path?: string) => render(
    <MemoryRouter initialEntries={!!path ? [path] : undefined}>
        <ReduxProvider store={createMockingStore()}>
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
        const { getByTestId, getAllByTestId } = renderApp('/men');
        expect( getByTestId('heading') ).toHaveTextContent("Men's Shoes");
        expect( getByTestId('products-index-page') ).toBeInTheDocument();
        expect( getAllByTestId('shoe-card').length ).toBeGreaterThan(0);
    });

    it("Renders Women's shows at '/women' ", () => {
        const { getByTestId, getAllByTestId } = renderApp('/women');
        expect( getByTestId('heading') ).toHaveTextContent("Women's Shoes");
        expect( getByTestId('products-index-page') ).toBeInTheDocument();
        expect( getAllByTestId('shoe-card').length ).toBeGreaterThan(0);
    });

    it("Renders Kids' shows at '/kids' ", () => {
        const { getByTestId, getAllByTestId } = renderApp('/kids');
        expect( getByTestId('heading') ).toHaveTextContent("Kids' Shoes");
        expect( getByTestId('products-index-page') ).toBeInTheDocument();
        expect( getAllByTestId('shoe-card').length ).toBeGreaterThan(0);
    });

    it("Navigation buttons in <NavBar /> work correctly", () => {
        const { getByTestId } = renderApp();
        expect( getByTestId('home-page') ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('men-navlink'))});
        expect( getByTestId('heading') ).toHaveTextContent("Men's Shoes");

        act(() => {fireEvent.click( getByTestId('women-navlink'))});
        expect( getByTestId('heading') ).toHaveTextContent("Women's Shoes");

        act(() => {fireEvent.click( getByTestId('kids-navlink'))});
        expect( getByTestId('heading') ).toHaveTextContent("Kids' Shoes");

        act(() => {fireEvent.click( getByTestId('home-navlink'))});
        expect( getByTestId('home-page') ).toBeInTheDocument();
        
        act(() => {fireEvent.click( getByTestId('cart-navlink'))});
        expect( getByTestId('cart-page') ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('logo-navlink'))});
        expect( getByTestId('home-page') ).toBeInTheDocument();
    });

    it("Link to Men's Shoes in <HomePage /> work correctly", () => {
        const { getByTestId } = renderApp();

        act(() => {fireEvent.click( getByTestId('men-collection'))});
        expect( getByTestId('heading') ).toHaveTextContent("Men's Shoes");
    });

    it("Link to Women's Shoes in <HomePage /> work correctly", () => {
        const { getByTestId } = renderApp();

        act(() => {fireEvent.click( getByTestId('women-collection'))});
        expect( getByTestId('heading') ).toHaveTextContent("Women's Shoes");
    });

    it("Link to Kids' Shoes in <HomePage /> work correctly", () => {
        const { getByTestId } = renderApp();

        act(() => {fireEvent.click( getByTestId('kids-collection'))});
        expect( getByTestId('heading') ).toHaveTextContent("Kids' Shoes");
    });

    it('Add to cart button in <ProductCard /> works correctly', () => {
        const { getAllByTestId, getByTestId, getByText } = renderApp('/men');
        expect( getByTestId('heading') ).toHaveTextContent("Men's Shoes");

        // Item should be added in the cart.
        act(() => {fireEvent.click(getAllByTestId('add-btn')[2])});
        act(() => {fireEvent.click(getByTestId('cart-navlink'))});
        expect( getByText("Shopping Cart") ).toBeInTheDocument();
        expect( getByText('Nike DBreak-Type') ).toBeInTheDocument();
        
        // Item quantity should be incremented if added again.
        act(() => {fireEvent.click(getByTestId('men-navlink'))});
        expect( getByTestId('heading') ).toHaveTextContent("Men's Shoes");
        act(() => {fireEvent.click(getAllByTestId('add-btn')[2])});
        act(() => {fireEvent.click(getByTestId('cart-navlink'))});
        expect( getByText("Shopping Cart") ).toBeInTheDocument();
        expect( getByText('2') ).toBeInTheDocument();
    });

    it('Link to <ProductDetails /> in <CartItem /> image works correctly', () => {
        const { getByTestId, getByText, getAllByTestId } = renderApp('/cart');
        expect( getByText('Shopping Cart') ).toBeInTheDocument();

        act(() => {fireEvent.click(getAllByTestId('shoe-image')[0])});
        expect( getByTestId('details-page') ).toBeInTheDocument();
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
    });

    it('Link to <ProductDetails /> in <CartItem /> shoe name works correctly', () => {
        const { getByTestId, getByText, getAllByTestId } = renderApp('/cart');
        expect( getByText('Shopping Cart') ).toBeInTheDocument();

        act(() => {fireEvent.click(getAllByTestId('shoe-name')[0])});
        expect( getByTestId('details-page') ).toBeInTheDocument();
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
    });

    it('Add to cart button in <ProductDetails /> works correctly', () => {
        const { getByTestId, getByText, getAllByTestId } = renderApp('/men/891d4a42-0d8f-4f31-b201-58b3383887c8');
        expect( getByTestId('details-page') ).toBeInTheDocument();
        expect( getByText('Nike DBreak-Type') ).toBeInTheDocument();

        act(() => {fireEvent.click(getByTestId('addtocart-btn'))});

        act(() => {fireEvent.click(getByTestId('cart-navlink'))});
        expect( getByText('Nike DBreak-Type') ).toBeInTheDocument();
        expect( getAllByTestId('cart-item').length ).toEqual(3);
    });

    it('Add to cart button in <ProductDetails /> works correctly for quantity > 1', () => {
        const { getByTestId, getByText, getAllByTestId } = renderApp('/men/891d4a42-0d8f-4f31-b201-58b3383887c8');
        const incrementBtn = getByTestId('increment-btn');

        act(() => {fireEvent.click(incrementBtn)});
        act(() => {fireEvent.click(incrementBtn)});
        act(() => {fireEvent.click(incrementBtn)});
        expect( getByText('4') ).toBeInTheDocument();
        act(() => {fireEvent.click(getByTestId('addtocart-btn'))});

        act(() => {fireEvent.click(getByTestId('cart-navlink'))});
        expect( getByText('Nike DBreak-Type') ).toBeInTheDocument();
        expect( getAllByTestId('cart-item').length ).toEqual(3);
        expect( getByText('4') ).toBeInTheDocument();
    });

    it('Add to cart button in <ProductDetails /> works correctly for quantity > 1', () => {
        const { getByTestId, getByText, getAllByTestId } = renderApp('/men/d52fd362-1080-46b3-a43c-d64f7a6825ab');
        const incrementBtn = getByTestId('increment-btn');

        act(() => {fireEvent.click(incrementBtn)});
        act(() => {fireEvent.click(incrementBtn)});
        expect( getByText('3') ).toBeInTheDocument();
        act(() => {fireEvent.click(getByTestId('addtocart-btn'))});

        act(() => {fireEvent.click(getByTestId('cart-navlink'))});
        expect( getByText('Nike Air Zoom-Type') ).toBeInTheDocument();
        expect( getAllByTestId('cart-item').length ).toEqual(2);
        expect( getByText('6') ).toBeInTheDocument();
    });

    it('Checkout button in <Cart /> works properly with complete checkout', () => {
        const { getByTestId, getAllByTestId, getByText } = renderApp('/cart');
        expect( getAllByTestId('cart-item').length ).toEqual(2);
        // Include both items for checkout
        act(() => {fireEvent.click( getAllByTestId('include')[0] )})

        act(() => {fireEvent.click( getByTestId('checkout-btn') )});
        expect( getByTestId('checkout-page') ).toBeInTheDocument();

        act(() => {fireEvent.click( getByTestId('cart-navlink') )});
        expect( getByText('You have 0 items in your cart.') ).toBeInTheDocument();
        expect( getByTestId('grand-total') ).toHaveTextContent('$0');
    });

    it('Checkout button in <Cart /> works properly with partial checkout', () => {
        const { getByTestId, getAllByTestId, getByText } = renderApp('/cart');
        expect( getAllByTestId('cart-item').length ).toEqual(2);
        
        act(() => {fireEvent.click( getByTestId('checkout-btn') )});
        expect( getByTestId('checkout-page') ).toBeInTheDocument();
        
        act(() => {fireEvent.click( getByTestId('cart-navlink') )});
        expect( getByText('You have 1 items in your cart.') ).toBeInTheDocument();
        expect( getAllByTestId('cart-item').length ).toEqual(1);
        expect( getByTestId('grand-total') ).toHaveTextContent('$0');
    });
})