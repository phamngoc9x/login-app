const noteInitialState = []
const allReducer = (state = noteInitialState, action) => {
  switch (action.type) {
    case 'GET_POST':
    console.log(action.data);
      return action.data
    default:
      return state
  }
}
export default allReducer;