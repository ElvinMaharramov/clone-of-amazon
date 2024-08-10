import { createSlice } from "@reduxjs/toolkit";

import { StoreProduct } from "../../../type";

interface NextState {
    productData: StoreProduct[];
    favoriteData: StoreProduct[];
    allProducts: StoreProduct[];
    userInfo: null | string;
}

const initialState: NextState = {
    productData: [],
    favoriteData: [],
    allProducts: [],
    userInfo: null,
};

export const nextSlice = createSlice({
    name: 'next',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // state.productData = action.payload;
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item._id === action.payload);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload)
            }
        },
    },
});

export const { addToCart } = nextSlice.actions;
export default nextSlice.reducer;