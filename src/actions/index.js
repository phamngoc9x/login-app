import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

const updateList = (isLogin) =>{
  console.error("isLogin", isLogin)
  return {
    type: types.UPDATE_LIST,
    isLogin 
  }
}
const fetchData = (data) =>{
  return (dispatch) =>{
    //console.log(data);
    return callApi('login', 'post', data).then(res => {
      localStorage.setItem('accessToken', JSON.stringify(res.data));
      console.error("res.data.accessToken", res.data.accessToken)
      if(res.data.accessToken!== undefined){
        var isLogin = true;
        dispatch(updateList(isLogin));
      }
      else{
        var isLogin = false;
        dispatch(updateList(isLogin));
      }
      console.log(res.data);
      
    })
  }
}

export { updateList, fetchData}