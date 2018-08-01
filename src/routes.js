import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home'
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import QuickView from './components/QuickView';
import Equipment from './components/Equipment';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';


export default (
  <Switch>
    <Route component={ Home } exact path="/" />
    <Route component={ Men } path='/Men' />
    <Route component={ Women } path='/Women' />
    <Route component={ Kids } path='/kids' />
    <Route component={ Equipment } path='/equipment' />
    <Route component={ QuickView } path='/quickview' />
    <Route component={ ShoppingCart } path='/shoppingcart' />
    <Route component={ Login } path='/login' />
  </Switch>
);
