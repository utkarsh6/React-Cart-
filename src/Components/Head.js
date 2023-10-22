import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

import { Badge, Button, Form  } from "react-bootstrap";

import { Dropdown } from 'react-bootstrap';

import { BsCartXFill } from 'react-icons/bs'

import {Link } from "react-router-dom";
import { CartState } from '../Context/Context';

import {FaTimes} from 'react-icons/fa';

export default function Head() {
  const{state:{shoppingcart},dispatch}=CartState()

  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
        <Link to={"/"}>Cart</Link> 
        </Navbar.Brand>
        <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
              style={{width:500}}
            />

            <Dropdown >
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              <BsCartXFill color="black" fontSize="25px" />
              <Badge>{shoppingcart.length}</Badge>
            </Dropdown.Toggle> 

            <Dropdown.Menu>
              {shoppingcart.length>0 ?(
                <>
                {
                  shoppingcart.map((i)=>(
                    <span className='shoppingitem' key={i.id}>
                   
                        <img  className="cartimg"src={i.img}
                        alt={i.title}/>
                        <div className='cartdetail'>
                          <span>{i.title}</span>
                          <span> ${i.price}</span>
                        </div>
                        <FaTimes style={{cursor:'pointer'}} onClick={()=>dispatch({
                          type: "Remove_from_cart",
                          payload:i
                        })}/>

                    </span>
                  ))
                }
                <Link to="/cart">
                  <Button style={{width:"100%"}}>
                    Go Back to cart  
                  </Button>
                </Link>
                
                
                </>

              ):( <Dropdown.Item href="#/action-1">Cart is empty </Dropdown.Item>)}
             
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div> 
  );
}









      
  
  