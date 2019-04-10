const noteInitialState = false
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      return action.isLogin
    default:
      return state
  }
}
export default allReducer;