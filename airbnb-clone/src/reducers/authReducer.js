function authReducer(state = {}, action) {
  if (action.type === "REGISTER_ACTION") {
    return action.payload;
  } else {
    return state;
  }
}

export default authReducer;
