import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App'
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import QuickView from './components/QuickView';
import Equipment from './components/Equipment';
import ShoppingCart from './components/ShoppingCart';


export default (
  <Switch>
    <Route component={ App } exact path="/" />
    <Route component={ Men } path='/Men' />
    <Route component={ Women } path='/Women' />
    <Route component={ Kids } path='/kids' />
    <Route component={ Equipment } path='/equipment' />
    <Route component={ QuickView } path='/quickview' />
    <Route component={ ShoppingCart } path='/shoppingcart' />
  </Switch>
);
