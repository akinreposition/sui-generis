import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import SemicolonNatives from './pages/SemicolonNatives';
import AllCohort from './pages/cohorts/AllCohort';
import Stacks from './pages/stacks'
import SuiGenerisState from './context/sui-generis/SuiGenerisState';
import './App.css';

const App = () => {
     
      return (
     <SuiGenerisState>
          <Router>
               <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route exact path='/natives' component={SemicolonNatives}/>
                    <Route exact path='/cohorts' component={AllCohort}/>
                    <Route exact path='/techstack' component={Stacks}/>
               </Switch>
          </Router>
     </SuiGenerisState>
   )
}

export default App;
