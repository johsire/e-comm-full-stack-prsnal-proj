import React, { Component } from 'react';
// import '../App.css';
import './Login.css'


class Login extends Component {
 login() {
  let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
  let url = `${window.location.origin}/auth/callback`

  window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`

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
        <p>
        <button className="btn" onClick={this.login}>Login</button>
        </p>
      </div>
    );
  }
};

export default Login;
