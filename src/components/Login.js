import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      accessToken: false,
      showMessages: false,
      messages: 'Wrong password or Email. Try again'
    }
  }
  
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState( {
      [name]: value
    })
  }

  submitForm =(email, password) => {
    var item = { email, password };
    this.props.login(item);
  }
  componentDidMount() {
    if(localStorage.getItem('accessToken') == null){
      localStorage.setItem('accessToken', JSON.stringify({}));
    }
    else{
      var result = (JSON.parse(localStorage.getItem('accessToken')).accessToken!== undefined);
      if(result){
        this.props.history.push("/");
      }
      if((JSON.parse(localStorage.getItem('accessToken')).name=== "NotAuthenticated")) {
        // this.setState({
        //   showMessages: true,
        // })
      }
    }
    
  }

  componentWillReceiveProps(nextProps){
    
    if(nextProps.isLogin !== this.props.isLogin){
      console.error(nextProps.isLogin);
      this.setState({
        accessToken: nextProps.isLogin
      })
    }
    else {
      console.error('fsdfsdfs')
      this.setState({
        showMessages: true,
      })
    }
  }
  componentDidUpdate() {
    if(this.state.accessToken){
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="auth__form">
        <h3 className="auth__title text-center mb-4">Please login to your account</h3>
        <p>{this.state.showMessages ? this.state.messages : ""}</p>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="email" onChange ={(event) => this.handleChange(event)} value={this.state.email} className="form-control" placeholder="Phone no or email id"/>
        </div>
        <div className="form-group">
        <label>Password</label>
          <input type="password" name="password"  onChange ={(event) => this.handleChange(event)} value={this.state.password} className="form-control" placeholder="Password"/>
        </div>
        <button type="reset" onClick ={()=>this.submitForm(this.state.email, this.state.password)} className="btn btn-primary btn-block">Login</button>
        <div className="mt-3"><Link to="/signup">Create account</Link></div>
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
    login: (data) => {
      dispatch(login(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
