import React from 'react';
import Home from './pages/index'
import SuiGenerisState from './context/sui-generis/SuiGenerisState';
import './App.css';

const App = () => {
     
      return (
          <SuiGenerisState>
               <Home /> 
          </SuiGenerisState>
   )
}

export default App;
