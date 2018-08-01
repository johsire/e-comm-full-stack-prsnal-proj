import React, { Component } from 'react';
// import '../App.css';


class Login extends Component {
 login() {
  let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">LOGIN PAGE</h1>
        </header>
        <p className="App-intro">
          This will be the Login page.

        </p>
      </div>
    );
  }
}

export default Login;
