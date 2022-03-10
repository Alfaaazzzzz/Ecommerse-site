import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import cartSlice from "./cart-slice";
import productSlice from "./productSlice";
import productSaga from "./productSaga";
import orderSlice from "./order-Slice";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    order:orderSlice.reducer,
  },
  middleware: [saga],
});

saga.run(productSaga);

export default store;
