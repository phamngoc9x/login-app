import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

const loginInfo = (isLogin) =>{
  return {
    type: types.LOGIN_INFO,
    isLogin 
  }
}
const login = (data) =>{
  return (dispatch) =>{
    return callApi('login', 'post', data).then(res => {
      var isLogin = true;
      localStorage.setItem('accessToken', JSON.stringify(res.data));
      if(res.data.accessToken!== undefined){
        dispatch(loginInfo(isLogin));
      }
      else{
        isLogin = false;
        dispatch(loginInfo(isLogin));
      }
    })
  }
}
const signUp = (data) =>{
  return (dispatch) =>{
    return callApi('signup', 'post', data).then(res => {
      console.log(res.data);
      localStorage.setItem('addNew', JSON.stringify(res.data));
    })
  }
}
export const getPost = (data) =>{
  return {
    type: types.GET_POST,
    data 
  }
}

export const fetchData = () =>{
  return (dispatch) =>{
    return callApi('posts', 'GET').then(res => {
      console.log(res.data);
      dispatch(getPost(res.data))
      
    })
  }
}


export { loginInfo, login, signUp}