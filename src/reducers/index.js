import { combineReducers }  from 'redux';
import loginInfo  from './loginInfo';
import getPost  from './getPost';

const allReducer = combineReducers({
  isLogin : loginInfo,
  data: getPost
})
export default allReducer;