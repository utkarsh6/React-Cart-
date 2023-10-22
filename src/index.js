import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Head from './Components/Head';
import { BrowserRouter } from 'react-router-dom';
import Context from './Context/Context';
import Home from './Components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>

    
    
  </React.StrictMode>
);

