import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartProducts:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cart_product: (state,{payload}) => {
     const productIndex = state.cartProducts.findIndex(item => item.id == payload.id);
     if(productIndex >= 0){
      state.cartProducts[productIndex].quantity +=1;
      toast.info('Incrementa las unidades en el carrito', {
        position: 'top-left'
      })
     }
     else {
      const tempProduct = {...payload,quantity:1};
      state.cartProducts.push(tempProduct)
      toast.success(`${payload.title} agregado al carrito`, {
        position: 'top-left'
      })
     }
    },
    decrease_quantity:(state,{payload}) => {
      const cartIndex = state.cartProducts.findIndex(item => item.id === payload.id);
      if(state.cartProducts[cartIndex].quantity > 1){
        state.cartProducts[cartIndex].quantity -= 1
        toast.error(`Reduce las unidades en el carrito`, {
          position: 'top-left'
        })
      }
      
    },
    remove_cart_product:(state,{payload}) => {
      state.cartProducts = state.cartProducts.filter(item => item.id !== payload.id);
      toast.error(`Retirado de tu carrito`, {
        position: 'top-left'
      })
    },
    clear_cart:(state,{payload}) => {
      const confirmMsg = window.confirm('¿Estás seguro de que quieres eliminar todos los productos de tu carrito?');
      if(confirmMsg){
        state.cartProducts = [];
      }
    }
  },
})

export const {cart_product,remove_cart_product,decrease_quantity,clear_cart} = cartSlice.actions;

export const cartProducts = state => state.cart.cartProducts;

export default cartSlice.reducer