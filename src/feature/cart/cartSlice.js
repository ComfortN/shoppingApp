import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // { id: { plant, quantity } }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { plant, quantity: 1 };
      }
    },
    increase: (state, action) => {
      state.items[action.payload].quantity++;
    },
    decrease: (state, action) => {
      const item = state.items[action.payload];
      if (item.quantity > 1) item.quantity--;
    },
    remove: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addToCart, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;