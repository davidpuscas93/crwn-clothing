import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    // <HomePage />
    <div>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/shop' component={Shop}></Route>]
      </Switch>
    </div>
  );
}

export default App;
