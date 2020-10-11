import { combineReducers } from '@reduxjs/toolkit';
import products from '../features/ProductsIndex/productsSlice';

const rootReducer = combineReducers({
    products,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;