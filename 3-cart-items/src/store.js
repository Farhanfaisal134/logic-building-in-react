import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existItem = state.cartItem.find((item) => item.id === action.payload.id);
      if (existItem) {
        existItem.qty += 1;
      } else {
        state.cartItem.push({ ...action.payload, qty: 1 });
      }
    },

    updateQty: (state, action) => {
      const item = state.cartItem.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty = action.payload.qty;
      }
    },

    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, updateQty, removeItem } = cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
