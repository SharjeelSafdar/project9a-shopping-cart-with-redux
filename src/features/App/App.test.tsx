import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

const renderApp = (path?: string) => render(
    <MemoryRouter initialEntries={!!path ? [path] : undefined}>
        <App />
    </MemoryRouter>
);

describe('Tests for <App />', () => {
    afterEach(cleanup);

    it('Renders without crashing', () => {
        renderApp();
    });
})
