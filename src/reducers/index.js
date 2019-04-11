import { combineReducers }  from 'redux';
import loginInfo  from './loginInfo';

const allReducer = combineReducers({
  isLogin : loginInfo
})
export default allReducer;