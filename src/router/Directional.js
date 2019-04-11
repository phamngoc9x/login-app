import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';

class Directional extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
}

export default Directional;
