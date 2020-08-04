import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routercontens from './router/router';



function App() {
  return (
    <BrowserRouter>
      <div>
       <Routercontens/>
      </div>
    </BrowserRouter>);
}

export default App;
