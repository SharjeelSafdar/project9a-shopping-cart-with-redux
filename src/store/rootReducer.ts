import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../features/ProductsIndex/productsSlice';
import cartReducer from '../features/Cart/cartSlice';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;