const initState = {openClose = false, content = ""};


// function siteModal(state = initState, action) {
//   if(action.type === "OPEN_MODAL"){
//     return action.payload;
//   }
//   return state
// }

// export default siteModal;

export default(state = initState, action)=> {
  if(action.type === "OPEN_MODAL"){
    return action.payload;
  }
  return state
}
