import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';
import { Link } from 'react-router-dom'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      accessToken: false,
      showMessages: false,
    }
  }
  
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  submitForm =(email, password) => {
    var item = { email, password };
    this.props.signUp(item);
  }

  componentDidMount() {
    if(localStorage.getItem('accessToken') == null){
      localStorage.setItem('accessToken', JSON.stringify({}));
    }
    else{
      var result = JSON.parse(localStorage.getItem('addNew'));
      if(result){
        this.props.history.push("/login");
      }
      if((JSON.parse(localStorage.getItem('accessToken')).name== "NotAuthenticated")) {
        this.setState({
          showMessages: true,
        })
      }
    }
  }
  componentDidUpdate() {
    if(JSON.parse(localStorage.getItem('addNew'))){
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="auth__form">
        <h3 className="auth__title text-center mb-4">Please Sign up to your account</h3>
        <p>{this.state.showMessages ? this.state.messages : ""}</p>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="email" onChange ={(event) => this.handleChange(event)} value={this.state.email} className="form-control" placeholder="Phone no or email id"/>
        </div>
        <div className="form-group">
        <label>Password</label>
          <input type="password" name="password"  onChange ={(event) => this.handleChange(event)} value={this.state.password} className="form-control" placeholder="Password"/>
        </div>
        <button type="reset" onClick ={()=>this.submitForm(this.state.email, this.state.password)} className="btn btn-primary btn-block">Signup</button>
        <div className="mt-3"><Link to="/login">Login</Link></div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.error("STATE", state)
  return {
    isLogin: state.isLogin
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (data) => {
      dispatch(signUp(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
