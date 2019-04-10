import fetchData  from './fetchData';
import { combineReducers }  from 'redux';

const allReducer = combineReducers({
  data : fetchData
})
export default allReducer;