import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  componentDidUpdate(){
    if(localStorage.getItem('accessToken') == null){
      localStorage.setItem('accessToken', JSON.stringify({}));
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="d-flex">
        <div className="mt-3"><Link to="/login">Login</Link></div>
        <div className="mt-3"><Link to="/signup">SignUp</Link></div>
      </div>
    )
  }
}
