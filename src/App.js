
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Head from './Components/Head';
import Cart from './Components/Cart';
import { Routes } from 'react-router-dom';
import Home from './Components/Home';



function App() {
  return (
    <div>
      
      <Head/>

      <Routes> {/* Wrap your routes inside the Routes element */}

     
        <Route path="/"  exact element={<Home />} />
        <Route path="/cart"  exact element={<Cart />} />

      
      </Routes>

    </div>
  );
  }
        
 

export default App;
