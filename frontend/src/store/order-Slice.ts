import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    orderList: [],
  },
  reducers: {
    orderPost_Pending(state) {
      state.isLoading = true;
    },
    orderPost_Success(state, action) {
        console.log('inside order post success')
    //   state.postOrder = action.payload;
      console.log('action', action.payload)
    //   console.log('orderDetails', state.postOrder)
      state.isLoading = false;
    },
    orderList_Pending(state) {
      state.isLoading = true;
    },
    orderList_Success(state, action) {
      state.orderList = action.payload;
      state.isLoading = false;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
