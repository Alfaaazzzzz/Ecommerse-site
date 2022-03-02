import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      {id:67,price:20,quantity:1,totalPrice:20,title:'T-shirt'}
    ]|| [],
    totalQuantity: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload;
      console.log(newProduct)
      
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );
    state.totalQuantity++;
      if(!existingProduct){
          state.products.push({
              id:newProduct.id,
              price:newProduct.price,
              quantity:1,
              totalPrice:newProduct.price,
              title:newProduct.title
          })
      }else{
          existingProduct.quantity++
          existingProduct.totalPrice= existingProduct.totalPrice+ newProduct.price
      }
    },

    removeProductFromCart(state, action) {
      const id= action.payload
      console.log('in remove cart')
      console.log(id)
      const existingProduct= state.products.find(product=>product.id === id)
      console.log('existingProduct', existingProduct?.quantity)
      state.totalQuantity--;
      // const {quantity}=existingProduct
      if(existingProduct!.quantity===1){
        state.products= state.products.filter(product=>product.id !== id)
      }
      else{
        existingProduct!.quantity--
        existingProduct!.totalPrice= existingProduct!.totalPrice - existingProduct!.price
      }
    },
    clearCart(state){
      state.totalQuantity=0
      state.products.length=0
    }
  },
});

export const cartActions=cartSlice.actions;
export default cartSlice;
