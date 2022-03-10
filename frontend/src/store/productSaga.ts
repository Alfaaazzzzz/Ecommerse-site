// import { useSelector } from "react-redux";
import { call, put, takeEvery,StrictEffect } from "redux-saga/effects";
import { orderActions } from "./order-Slice";
import { productActions } from "./productSlice";
import orderSlice from "./order-Slice";


interface Products{
  [x: string]: any;
  [index:number]:
  {id:string;
  price:number;
  quantity:number
  totalPrice:number
  title:string;}
}

//watcher

function* productSaga():Generator<StrictEffect> {
  yield takeEvery("product/getProductFetch", workGetProductsFetch);
  yield takeEvery("product/getMensProductFetch",workGetMensProductsFetch )
  yield takeEvery("product/getWomensProductFetch",workGetWomensProductsFetch )
  yield takeEvery("product/getJeweleryProductFetch",workGetJeweleryProductsFetch )
  yield takeEvery("product/getElectronicsProductFetch",workGetElectronicsProductsFetch )
  yield takeEvery("order/orderList_Pending",workGetOrdersFetch )
  yield takeEvery("order/orderPost_Success",workPostOrdersFetch )
}

//worker

function* workGetProductsFetch():Generator<StrictEffect, void, Products> {
    try {
        // console.log('inside try')
      const  response = yield call(() =>
        fetch("http://localhost:5000/products")
        );
        console.log('response=> ', response)
      // console.log('outside try')
      // const {body}= response
      if(!response.ok){
          throw new Error('something went wrong!')
      }
      // console.log('before data')
      const data = yield response.json()
      // const data= 'hello'
      // console.log('after data')
      console.log('homeDataSaga=> ',data)
      yield put (productActions.getAllProductsFetch(data))
    } catch (error) {
        console.log('sagaError=> ',error)
    }
  }

  function* workGetMensProductsFetch():any{
    try {
      const response= yield call(()=>fetch(`http://localhost:5000/products/mens`))
      console.log('mensResponse==> ',response)
      if(!response.ok){
        throw new Error('Something Went wrong!')
      }
      const data= yield response.json()
      console.log('mensDataSaga=>',data)
      yield put(productActions.getMensAllProductFetch(data))
    } catch (error) {
      console.log('sagaMens=> ', error)
    }
  }

  function* workGetWomensProductsFetch():any{
    try {
      const response= yield call(()=>fetch(`http://localhost:5000/products/womens`))
      // console.log('womensResponse==> ',response)
      console.log('slice Data=> ',orderSlice)
      if(!response.ok){
        throw new Error('Something Went wrong!')
      }
      const data= yield response.json()
      // console.log('womensDataSaga=>',data)
      yield put(productActions.getWomensAllProductFetch(data))
    } catch (error) {
      console.log('sagaWomens=> ', error)
    }
  }

  function* workGetJeweleryProductsFetch():any{
    try {
      const response= yield call(()=>fetch('http://localhost:5000/products/jewelery'))
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      const data= yield response.json()
      // console.log(data)
      yield put(productActions.getJeweleryAllProductFetch(data))
    } catch (error) {
      console.log('sagaJewelery=> ',error)
    }
  }

  function* workGetElectronicsProductsFetch():any{
    try {
      const response= yield call(()=>fetch('http://localhost:5000/products/electronics'))
    if(!response.ok){
      throw new Error('Something went wrong!')
    }
    const data= yield response.json()
    yield put(productActions.getAllElectronicsProductFetch(data))
    } catch (error) {
      console.log('sagaElectronics=> ',error)
    }
    
  }

  function* workGetOrdersFetch():any{
    try {
      const response= yield call(()=>fetch(`http://localhost:5000/orders`))
      // console.log('ordersResponse==> ',response)
      if(!response.ok){
        throw new Error('Something Went wrong!')
      }
      const data= yield response.json()
      // console.log('ordersDataSaga=>',data)
      yield put(orderActions.orderList_Success(data))
    } catch (error) {
      console.log('sagaOrders=> ', error)
    }
  }

  // const orderData= useSelector((state:{order:{postOrder:{}}})=>{
  //   const{postOrder}=state.order
  //   return postOrder
  // })

  function* workPostOrdersFetch(action:any):any{
    console.log('post order action==> ', action.payload)
    try {
      const response= yield call(()=>fetch('http://localhost:5000/order',{
        method: "POST",
        body: JSON.stringify(action.payload),
        headers: {
          "content-type": "application/json",
        },
      }))
      if(!response.ok){
        throw new Error('Something went wrong')
      }
      const data= response.json()
      console.log('data=> ',data)
    } catch (error) {
      console.log(error)
    }
  }

export default productSaga