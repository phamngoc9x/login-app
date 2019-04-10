import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const updateList = (data) =>{
  return {
    type: types.UPDATE_LIST,
    data 
  }
}
export const fetchData = (data) =>{
  return (dispatch) =>{
    //console.log(data);
    return callApi('login', 'post', data).then(res => {
      //dispatch(updateList(res.data))
      console.log(res.data);
    })
  }
}