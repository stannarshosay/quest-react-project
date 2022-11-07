import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        similarProducts:[],
        searchProducts:[]
    },
    reducers:{
        addProducts:(state,action) => {
            state.products = action.payload;
        },
        setSimilarProducts:(state,action) => {
            state.similarProducts = state.products.filter((product)=>{
                return product.category === action.payload;
            });
        },
        searchProducts:(state,action) => {
            state.searchProducts = state.products.filter((product)=>{
                return product.title.toLowerCase().includes(action.payload.toLowerCase());
            });
        }
    }
});

export const { addProducts,setSimilarProducts,searchProducts } = productSlice.actions;

export default productSlice.reducer;