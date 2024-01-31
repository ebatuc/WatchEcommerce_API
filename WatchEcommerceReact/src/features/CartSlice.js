import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const addedItem = state.cart.find((c) => c.product.id === product.id);

      if (addedItem) {
        addedItem.quantity += 1;
      } else {
        state.cart.push({ product: product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { productId } = action.payload;
      state.cart = state.cart.filter((c) => c.product.id !== productId);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
