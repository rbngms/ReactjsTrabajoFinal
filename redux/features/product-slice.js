import { createSlice } from '@reduxjs/toolkit';
import productsItems from '../../data/products';

const initialState = {
  products:productsItems,
  product:{},
  priceFilter:null,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    single_product: (state,{payload}) => {
     state.product = state.products
     .map((item) => item.product)
     .flat()
     .find((product) => product.id === payload);
    },
    specific_product:(state,{payload}) => {
      state.product = state.products.map(item => item.product).flat().find(item => item.id == payload)
    },
  },
})

export const { single_product,priceFilter,specific_product } = productSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectProduct = (state) => state.products.product;
export default productSlice.reducer