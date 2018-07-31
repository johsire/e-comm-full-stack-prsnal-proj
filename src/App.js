import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'

import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import QuickView from './components/QuickView';
import Equipment from './components/Equipment';
import ShoppingCart from './components/ShoppingCart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HOME PAGE</h1>
        </header>
        <p className="App-intro">
          This will be my landing page.
        </p>

        <Men />
        <Women />
        <Kids />
        <Equipment />
        <QuickView />
        <ShoppingCart />

      </div>
    );
  }
}

export default App;
