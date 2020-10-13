import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { Cart } from './Cart';
import { CartItem } from './CartItem';
import createMockingStore from '../../store/mockingStore';

const renderCart = () => render(
    <MemoryRouter>
        <ReduxProvider store={createMockingStore()}>
            <Cart />
        </ReduxProvider>
    </MemoryRouter>
);

describe('Tests for <Cart />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderCart();
    });

    it('Displays heading "Shopping Cart"', () => {
        const { getByText } = renderCart();
        expect( getByText('Shopping Cart') ).toBeInTheDocument();
    });

    it('Displays the number of items in the cart', () => {
        const { getByText } = renderCart();
        expect( getByText(`You have 2 items in your cart.`) ).toBeInTheDocument();
    });

    it('Displays grand total of $0', () => {
        const { getByText, getByTestId } = renderCart();
        expect( getByText('Grand Total') ).toBeInTheDocument();
        expect( getByTestId('grand-total') ).toHaveTextContent('$450');
    });

    it('Displays a checkout button', () => {
        const { getByTestId } = renderCart();
        const checkoutBtn = getByTestId('checkout-btn');
        expect( checkoutBtn ).toHaveTextContent('Checkout');
        expect( checkoutBtn ).toHaveAttribute('title', 'Proceed to checkout');
    });

    it('Displays shoe data properly', () => {
        const item: CartItem = {
            id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
            name: "Air Jordan 1 Mid",
            category: "Men's Shoes",
            price: 115,
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
            quantity: 3,
            includedInSum: false,
        }
        const { getByText, getByTestId } = render(
            <ReduxProvider store={createMockingStore()}>
                <CartItem item={item} />
            </ReduxProvider>
        );
        expect( getByTestId('include') ).toBeInTheDocument();
        expect( getByTestId('shoe-image') ).toBeInTheDocument();
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
        expect( getByText("Men's Shoes") ).toBeInTheDocument();
        expect( getByText('Quantity') ).toBeInTheDocument();
        expect( getByText('3') ).toBeInTheDocument();
        expect( getByText('$345') ).toBeInTheDocument();
        expect( getByText('$115 x 3') ).toBeInTheDocument();
    });

    it('Include checkbox toggles correctly', () => {
        const { getAllByTestId, getByTestId } = renderCart();
        const includeCheckboxes = getAllByTestId('include');

        expect( getByTestId('grand-total') ).toHaveTextContent('$450');
        act(() => {fireEvent.click(includeCheckboxes[0])});
        expect( getByTestId('grand-total') ).toHaveTextContent('$565');
        act(() => {fireEvent.click(includeCheckboxes[0])});
        expect( getByTestId('grand-total') ).toHaveTextContent('$450');
    });

    it('Increment button works correctly', () => {
        const { getAllByTestId, getByText, getAllByText } = renderCart();
        const incrementBtns = getAllByTestId('increment-quantity');

        expect( getByText('1') ).toBeInTheDocument();
        act(() => {fireEvent.click(incrementBtns[0])});
        expect( getByText('2') ).toBeInTheDocument();
        act(() => {fireEvent.click(incrementBtns[0])});
        expect( getAllByText('3').length ).toEqual(2);
    });

    it('Decrement button works correctly', () => {
        const { getAllByTestId, getByText, getAllByText } = renderCart();
        const decrementBtns = getAllByTestId('decrement-quantity');

        expect( getByText('3') ).toBeInTheDocument();
        act(() => {fireEvent.click(decrementBtns[1])});
        expect( getByText('2') ).toBeInTheDocument();
        act(() => {fireEvent.click(decrementBtns[1])});
        expect( getAllByText('1').length ).toEqual(2);
        // Now, item should be removed from the cart.
        act(() => {fireEvent.click(decrementBtns[1])});
        expect( getAllByTestId('cart-item').length ).toEqual(1);
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
    });

    it('Remove button works correctly', () => {
        const { getAllByTestId, getByText } = renderCart();
        const deleteBtns = getAllByTestId('delete-btn');

        expect( getByText('You have 2 items in your cart.') ).toBeInTheDocument();
        act( () => {fireEvent.click(deleteBtns[0])} );
        expect( getByText('You have 1 items in your cart.') ).toBeInTheDocument();
        act( () => {fireEvent.click(deleteBtns[1])} );
        expect( getByText('You have 0 items in your cart.') ).toBeInTheDocument();
    });
})