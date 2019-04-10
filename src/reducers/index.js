import { combineReducers }  from 'redux';
import updateList  from './updateList';

const allReducer = combineReducers({
  isLogin : updateList
})
export default allReducer;