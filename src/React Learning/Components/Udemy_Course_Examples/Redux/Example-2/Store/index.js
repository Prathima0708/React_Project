// import { configureStore } from '@reduxjs/toolkit';
import uiSlice from "./ui-slice";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

// import uiSlice from './ui-slice';
// import cartSlice from './cart-slice';

// const store = configureStore({
//     reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
//   });
  
//   export default store;








const store=configureStore({
  reducer:({
    ui:uiSlice.reducer,
    cart:cartSlice.reducer
  })
})

export default store