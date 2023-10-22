import React from 'react'
import { CartState } from '../Context/Context'
import Products from './Products'
import "../Components/style.css"
import { Filters } from './Filters'
const Home=()=> {
  const {state:{items}}=CartState()
  console.log(items)
  return (
    <div className='home'>
      {<Filters/>}
      <div className='Container'>
        {  items.map((item) =>{
        
        return <Products i={item} key={item.randomID}/>

       })
}
     
        

      </div>

    </div>
  )
}

export default Home