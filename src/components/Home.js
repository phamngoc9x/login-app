import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    }
  }
  componentDidMount(){
    this.props.fetchData();
  }
  componentDidUpdate(){
    if(localStorage.getItem('accessToken') == null){
      localStorage.setItem('accessToken', JSON.stringify({}));
      this.props.history.push("/login");
    }
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="d-flex">
        <div className="mt-3"><Link to="/login">Login</Link></div>
        <div className="mt-3"><Link to="/signup">SignUp</Link></div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  console.error(state);
  return {
    data: state.data
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchData: (data) => {
      dispatch(fetchData(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
