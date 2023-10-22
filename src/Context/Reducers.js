import React from 'react'

export const shoppingcartReducer=(state,action)=>{
    switch (action.type) {    
        // Action takes two things First its type that is add to cart and second is payload 
        //payload is data that we take from state and manipulate the state  

        case "Add_to_Cart":

            return{...state,shoppingcart:[...state.shoppingcart,{...action.payload,qty:1}]};

            case "Remove_from_cart":

            return{...state,shoppingcart:state.shoppingcart.filter(c=>c.id!==action.payload.id)};

            case " Change_qty":
                return{...state,shoppingcart:state.shoppingcart.filter(c=>c.id==action.payload.id ?
                    c.qty=action.payload.qty:c.qty)}

        default:
            return state ;
    }
}
