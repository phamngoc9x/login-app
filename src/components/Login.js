import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);
    console.error("RootProps", props)
    this.state = {
      email: '',
      password: '',
      accessToken: false,
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
    this.props.fetchData(item);
    this.setState({
      email: '',
      password: '',
    })
    if(this.state.accessToken){
      this.props.history.push("/");
    }
  }

  // componentDidMount() {
  //   if(localStorage.getItem('accessToken') == null){
  //     localStorage.setItem('accessToken', JSON.stringify({}));
  //   }
  //   else{
  //     var result = (JSON.parse(localStorage.getItem('accessToken')).accessToken!==undefined);
  //     if(result){
  //       this.setState({
  //         accessToken: true
  //       })
  //     }
  //   }
    
  // }

  componentWillReceiveProps(nextProps){
    console.error("nextProps", nextProps);
    console.error("this.props", this.props)
    if(nextProps.isLogin !== this.props.isLogin){
      this.setState({
        accessToken: nextProps.isLogin
      })
    }
  }

  componentDidUpdate() {
    
    console.log(this.state.accessToken);
    console.log(this.props.isLogin);
    if(this.state.accessToken){
      this.props.history.push("/");
    }
  }
  render() {
   // console.log(JSON.parse(localStorage.getItem('accessToken')).accessToken);
    return (
      <div className="auth__form">
        <h3 className="auth__title text-center mb-4">Please login to your account</h3>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="email" onChange ={(event) => this.handleChange(event)} value={this.state.email} className="form-control" placeholder="Phone no or email id"/>
        </div>
        <div className="form-group">
        <label>Password</label>
          <input type="password" name="password"  onChange ={(event) => this.handleChange(event)} value={this.state.password} className="form-control" placeholder="Password"/>
        </div>
        <button type="reset" onClick ={()=>this.submitForm(this.state.email, this.state.password)} className="btn btn-primary btn-block">Login</button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  console.error("Storestate", state)
  return {
    isLogin: state.isLogin
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: (data) => {
      dispatch(fetchData(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
