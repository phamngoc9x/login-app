import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/index'
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState( {
      [name]: value
    })
    console.log(name , value);
  }
  submitForm =(email, password) => {
    var item = {email, password};
    console.error(item);
    this.props.fetchData(item);
    
  }
  
  render() {
    return (
      <div className="App">
          <input type="text" name="email" onChange ={(event) => this.handleChange(event)}/>
          <input type="password" name="password"  onChange ={(event) => this.handleChange(event)}/>
          <button type="submit" onClick ={()=>this.submitForm(this.state.email, this.state.password)}>login</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editData : state.editData,
    isAdd: state.isAdd,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: (item) => {
      dispatch(fetchData(item))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

