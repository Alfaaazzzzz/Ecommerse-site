import { createSlice } from "@reduxjs/toolkit";

interface Products{
  [index:number]:
  {id:string;
  price:number;
  quantity:number
  totalPrice:number
  title:string;}
}

const productSlice= createSlice({
    name:'product',
    initialState:{
    homeProducts:[] as Products,
    mensProducts:[] as Products,
    womensProducts:[] as Products,
    jeweleryProducts:[] as Products,
    electronicsProducts:[] as Products,
    isLoading: false,
    },
    reducers:{
        getProductFetch(state){
            state.isLoading=true
          },
          getAllProductsFetch(state,action){
            state.homeProducts= action.payload
            state.isLoading=false
          },
          getMensProductFetch(state){
            state.isLoading=true
          },
          getMensAllProductFetch(state,action){
            state.mensProducts= action.payload
            state.isLoading=false
          },
          getWomensProductFetch(state){
            state.isLoading=true
          },
          getWomensAllProductFetch(state,action){
            state.womensProducts= action.payload
            state.isLoading=false
          },
          getJeweleryProductFetch(state){
            state.isLoading=true
          },
          getJeweleryAllProductFetch(state,action){
            state.jeweleryProducts= action.payload
            state.isLoading=false
          },
          getElectronicsProductFetch(state){
            state.isLoading=true
          },
          getAllElectronicsProductFetch(state,action){
            state.electronicsProducts= action.payload
            state.isLoading=false
          },
    } 
})

export const productActions=productSlice.actions;
export default productSlice;
