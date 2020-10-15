import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider as ReduxProvider } from 'react-redux';
import { Notification } from './Notification';
import creareMockingStore from '../../store/mockingStore';

const renderCompo = (type: 'ADD' | 'REMOVE') => render(
    <ReduxProvider store={creareMockingStore()}>
        <Notification type={type} />
    </ReduxProvider>
);

describe('Tests for <Notification />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderCompo('ADD');
    });

    it('Renders "ADD" notification correctly', () => {
        const { getByText } = renderCompo('ADD');
        expect( getByText('Added Successfully') ).toBeInTheDocument();
    });

    it('Renders "REMOVE" notification correctly', () => {
        const { getByText } = renderCompo('REMOVE');
        expect( getByText('Removed Successfully') ).toBeInTheDocument();
    });
});