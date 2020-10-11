import { createSlice } from '@reduxjs/toolkit';
import shoes from '../../assets/shoes.json';

const initialState: Shoes = {
    men: shoes.men,
    women: shoes.women,
    kids: shoes.kids,
    shoesById: { ...shoes.men, ...shoes.women, ...shoes.kids },
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productsSlice.reducer;