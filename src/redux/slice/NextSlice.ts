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
                (item: StoreProduct) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
                // existingProduct.quantity += 1;
            } else {
                state.productData.push(action.payload)
                // state.productData.push({ ...action.payload, quantity: 1 })
            };
        },

        addToFavorite: (state, action) => {
            const existingProduct = state.favoriteData.find(
                (item: StoreProduct) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
                // existingProduct.quantity += 1;
            } else {
                state.favoriteData.push(action.payload)
                // state.productData.push({ ...action.payload, quantity: 1 })
            };
        },

        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item._id === action.payload._id
            );
            existingProduct && existingProduct.quantity++;
        },

        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: StoreProduct) => item._id === action.payload._id
            );
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity = 1;
            } else {
                existingProduct!.quantity--;
            }
        },

        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },

        deleteFavoriteProduct: (state, action) => {
            state.favoriteData = state.favoriteData.filter(
                (item) => item._id !== action.payload
            );
        },

        resetCart: (state) => {
            state.productData = [];
        },

        resetFavoriteCart: (state) => {
            state.favoriteData = [];
        },

        addUser: (state, action) => {
            state.userInfo = action.payload;
        },

        removeUser: (state) => {
            state.userInfo = null;
        },

        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
        }
    },
});

export const {
    addToCart,
    addToFavorite,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    deleteFavoriteProduct,
    resetCart,
    resetFavoriteCart,
    addUser,
    removeUser,
    setAllProducts,
} = nextSlice.actions;
export default nextSlice.reducer;