const noteInitialState = {}
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'LOGIN_INFO':
      return action.isLogin
    default:
      return state
  }
}
export default allReducer;