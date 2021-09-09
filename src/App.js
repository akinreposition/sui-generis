import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import SemicolonNatives from './pages/SemicolonNatives';
import AllCohort from './pages/cohorts/allcohorts/AllCohort';
import Stacks from './pages/stacks'
import SuiGenerisState from './context/sui-generis/SuiGenerisState';
import './App.css';

const App = () => {
     
      return (
     <SuiGenerisState>
          <Router>
               <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/natives' component={SemicolonNatives}/>
                    <Route exact path='/cohorts' component={AllCohort}/>
                    <Route exact path='/techstack' component={Stacks}/>
               </Switch>
          </Router>
     </SuiGenerisState>
   )
}

export default App;
