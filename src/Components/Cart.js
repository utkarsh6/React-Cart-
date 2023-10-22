import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import { ListGroup, ListGroupItem,Row,Col, Image, Button, ButtonGroup } from 'react-bootstrap'
import { Rate } from './Rate'
import {FaTimes} from 'react-icons/fa';

const Cart=()=> {

  const{state:{shoppingcart},dispatch}=CartState()

   const [carttotal, setCarttotal]=useState();
   useEffect(()=>{
    setCarttotal(shoppingcart.reduce((accumulator, current)=>accumulator+Number(current.price)*current.qty
    ,0))
   },[shoppingcart])
  return (
    <div className='home'>
      <div className='Container'>
        <ListGroup>
          {
            shoppingcart.map((i)=>(
              <ListGroupItem>
                <Row>
                <Col md={3}>
                   <Image src={i.img} alt={i.title} fluid rounded/>

                  </Col>
                  <Col md={3}>
                    <span>{i.title}</span>

                  </Col>

                  <Col> Price ${i.price}</Col>
                  <Rate rating={i.rating}/>
                  <Col>
                  <ButtonGroup>
                    <Button onClick={()=>dispatch(
                      {
                        type: " Change_qty",
                        payload: {id:i.id,qty:i.qty-1}
                      }
                    )}>
                      -
                    </Button>           
                  </ButtonGroup>
                  </Col>
                  <Col>
                  <Col>
                  <ButtonGroup>
                    <Button onClick={()=>dispatch(
                      {
                        type: " Change_qty",
                        payload: {id:i.id,qty:i.qty+1}
                      }
                    )}>
                      +
                    </Button>           
                  </ButtonGroup>
                  </Col>
                  <Button onClick={()=>dispatch({
                    type:"Remove_from_cart",
                    payload: i,
                  })}
                  >  <FaTimes  mt={5} style={{cursor:'pointer'}}/></Button>
                  </Col>

                </Row>

              
              </ListGroupItem>
            
            
          
            ))
            
          }
          <span> Total ${carttotal}</span>
          
          
        </ListGroup>

      </div>


    </div>
  )
}

export default Cart