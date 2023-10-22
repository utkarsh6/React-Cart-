import React from 'react'
import Form from'react-bootstrap/Form'
import { CDBRating, CDBContainer } from 'cdbreact';
import { Button } from 'react-bootstrap';
import { Rate } from './Rate';

export const Filters = () => {
  return (
    <div className='filters'>
    <Form>
    <span> 
        <Form.Check // prettier-ignore
      type="radio"
      name='group1'
      id='inline-1'
      label="Ascending"
    />
    </span>
   
    <Form.Check // prettier-ignore
      inline
      type="radio"
      name='group1'
      label="Descending"
      id='inline-2'
      
    />
     <span> 
        <Form.Check // prettier-ignore
        inline
      type="checkbox"
      name='group1'
      label="Include out of stock"
      id='inline-3'
    />
    </span>

    {<Rate/>}
    <Button className=' btn btn-success mt-2' > Clear Filters</Button>


    
  </Form>
  </div>
  
  )
}


