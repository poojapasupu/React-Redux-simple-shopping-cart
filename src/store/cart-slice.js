import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemstoCart(state, action) {
      const newItem = action.payload;
      const itemExistsinCart = state.items.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      state.changed = true;
      if (itemExistsinCart) {
        itemExistsinCart.quantity++;
        itemExistsinCart.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeItemsfromCart(state, action) {
      const id = action.payload;
      const itemExistsinCart = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (itemExistsinCart.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        itemExistsinCart.quantity--;
        itemExistsinCart.totalPrice -= itemExistsinCart.price;
      }
    },

    replaceCart(state, action){
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    }
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
