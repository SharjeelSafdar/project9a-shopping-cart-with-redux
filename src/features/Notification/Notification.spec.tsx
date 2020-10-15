import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { Notification } from './Notification';
import creareMockingStore, { initialTestState } from '../../store/mockingStore';

const renderCompo = (type: 'ADD' | 'REMOVE') => render(
    <ReduxProvider store={creareMockingStore()}>
        <Notification
            type={type}
            shoeName={initialTestState.cart[0].name}
            shoeImage={initialTestState.cart[0].image}
        />
    </ReduxProvider>
);

describe('Tests for <Notification />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderCompo('ADD');
    });

    it('Renders "ADD" notification correctly', () => {
        const { getByText, getByTestId } = renderCompo('ADD');

        expect( getByText('Added Successfully') ).toBeInTheDocument();
        expect( getByTestId('shoe-image') ).toBeInTheDocument();
        expect( getByText('Air Jordan 1 Mid') ).toBeInTheDocument();
    });

    it('Renders "REMOVE" notification correctly', () => {
        const { getByText, getByTestId } = renderCompo('REMOVE');

        expect( getByText('Removed Successfully') ).toBeInTheDocument();
        expect( getByTestId('shoe-image') ).toBeInTheDocument();
        expect( getByText(initialTestState.cart[0].name) ).toBeInTheDocument();
    });
});