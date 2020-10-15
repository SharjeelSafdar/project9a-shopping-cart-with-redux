import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartItem[] = [
    // {
    //     id: "3f60de24-1815-4d88-a8dc-5ceda3f41bdc",
    //     name: "Air Jordan 1 Mid",
    //     category: "Men's Shoes",
    //     price: 115,
    //     image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d2f41ddc-a08e-443a-8eb0-6960ebb4a408/air-jordan-1-mid-shoe-1zMCFJ.jpg",
    //     quantity: 1,
    //     includedInSum: false,
    // },
    // {
    //     id: "d52fd362-1080-46b3-a43c-d64f7a6825ab",
    //     name: "Nike Air Zoom-Type",
    //     category: "Men's Shoes",
    //     price: 150,
    //     image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/5c1e3a90-b2b7-479c-b567-3b50903cf9da/air-zoom-type-mens-shoe-PZR40V.jpg",
    //     quantity: 3,
    //     includedInSum: true,
    // },
];

const getItemIndex = (state: CartItem[], idToFind: string): number => {
    const ids = state.map(item => item.id);
    return ids.indexOf(idToFind);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const itemIndex = getItemIndex(state, action.payload.id);
            if (itemIndex && itemIndex < 0)
                state.push(action.payload);
            else
                state[itemIndex].quantity += action.payload.quantity;
        },
        removeFromCart(state, action: PayloadAction<{id: string}>) {
            return state.filter( item => item.id !== action.payload.id );
        },
        incrementQuantity(state, action: PayloadAction<{id: string}>) {
            const itemIndex = getItemIndex(state, action.payload.id);
            state[itemIndex].quantity += 1;
        },
        decrementQuantity(state, action: PayloadAction<{id: string}>) {
            const itemIndex = getItemIndex(state, action.payload.id);

            if (state[itemIndex].quantity > 1)
                state[itemIndex].quantity -= 1;
            else
                return state.filter( item => item.id !== action.payload.id );
        },
        batchRemove(state, action: PayloadAction<{ids: string[]}>) {
            return state.filter( item => !action.payload.ids.includes(item.id) );
        },
        toggleInclude(state, action: PayloadAction<{id: string}>) {
            const itemIndex = getItemIndex(state, action.payload.id);
            state[itemIndex].includedInSum = !state[itemIndex].includedInSum;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    batchRemove,
    toggleInclude,
} = cartSlice.actions;
export default cartSlice.reducer;