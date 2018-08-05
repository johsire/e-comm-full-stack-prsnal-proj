import React, { Component } from 'react';
import axios from 'axios';
// import '../App.css';
import {connect} from 'react-redux';
import {updateUserData} from '../ducks/reducer';


class ShoppingCart extends Component {
  componentDidMount() {
    axios.get('/api/user-data').then(res => {
    // invoke an action creator to update redux store;
      this.props.updateUserData(res.data);
    });
  };

  logout() {
    axios.get('/api/logout').then(res => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SHOPPING CART PAGE</h1>
        </header>
        <p className="App-intro">
          This will be the Shopping Cart page.
          <p>
            <button className="btn">Logout</button>
          </p>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
};

// local component obj to redux store state object + the second one is our action creator which is optional and always goes in a the second argument;

export default connect(mapStateToProps, {updateUserData})(ShoppingCart);
