import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>  
        <Route exact path='/' render={(props => <Home/>)}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
