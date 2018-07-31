import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css'

// import Men from './components/Men';
// import Women from './components/Women';
// import Kids from './components/Kids';
// import QuickView from './components/QuickView';
// import Equipment from './components/Equipment';
// import ShoppingCart from './components/ShoppingCart';
// import Home from './components/Home';
import routes from './routes';


class App extends Component {
  render() {
    return (
      <div className="App">
       
          <nav className='nav'>
          <Link to="/" className='links'>Home</Link>
          <Link to="/men" className='links'>Men</Link> 
          <Link to="/women" className='links'>Women</Link> 
          <Link to="/kids" className='links'>Kids</Link>
          <Link to="/equipment" className='links'>Equipment</Link>
          <Link to="/shoppingcart" className='links'>ShoppingCart</Link>
          <Link to="/quickview" className='links'>QuickView</Link>

         </nav>

       { routes }

        {/* <Men />
        <Women />
        <Kids />
        <Equipment />
        <QuickView />
        <ShoppingCart /> */}

      </div>
    );
  }
}

export default App;
