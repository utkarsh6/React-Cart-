import React, { createContext, useContext, useReducer } from 'react'
import Chance from 'chance';
import { shoppingcartReducer } from './Reducers';
// import faker from "faker"
import data from "../data"
import list from '../data';



//Creating a context
// Cart will be the name of context
const Cart=createContext();
const chance = new Chance();





const  Context=({children})=> {

 

    const items=list.map((item)=>({
        ...item,
     randomID : chance.guid(),
    //  productName : chance.word({ syllables: 3 }),
   productPrice :chance.floating({ min: 1, max: 100, fixed: 2 }),
//    productImage : chance.url(),
//   const productImage = faker.image.imageUrl();
//    inStock : chance.bool(),
   fastDelivery : chance.bool(),
   productRating : chance.floating({ min: 1, max: 5, fixed: 1 }),
}))
    console.log(items)

    //instead of passing prop in <Cart.Provider value={items}>{children} we will useReducer 
    const[state,dispatch]=useReducer(shoppingcartReducer,{
        items:items,
        shoppingcart:[]

    })

    return (
    //cartprovider  will wrap whole react app
    //this children will come from index.js
    <Cart.Provider value={{state,dispatch}} >{children}
    </Cart.Provider>
  )
}
export default  Context; 

export const CartState=()=>{
return useContext(Cart)
 
}



