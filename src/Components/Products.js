import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from './RatingStyles';
import { Rate } from './Rate';
import { CartState } from '../Context/Context';


const Products = ({i}) => {
    const{state:{shoppingcart},dispatch}=CartState();

  return (
    // <div> {i.productName}</div> 
    <div className='products'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={i.img}  alt={i.title}/>
   
      <Card.Body>
        <Card.Title>{i.author}</Card.Title>
        <Card.Subtitle style={{paddingBottom:12}}>
            <span>${i.
            price}</span>
            <Rate rating={i.productRating}/>
          
        </Card.Subtitle>
       {/* The disabled attribute should be set to true to disable the button when the product is out of stock.  */}
            
          
          { 
          shoppingcart.some((p)=>p.id==i.id)?(<Button onClick={()=>{
            //it will throw a dispatch to the reducer.js it will trigger two action add to cart , remove
            dispatch({
                type:"Remove_from_cart",
                payload:i,
            })

        }} 
          
          className='btn btn-danger mt-1'> Remove from cart 
            </Button>)
            :( <Button onClick={()=>{
                dispatch({
                    type:"Add_to_Cart",
                    payload:i,
                })

            }}disabled={!i.inStock ? false : true} className='btn btn-success'>
                {i.inStock? "Out of Stock": "Add to Cart"}
            </Button>
            )        
          }
        
      </Card.Body>
    </Card>

    </div>
    
  )
}


export default Products