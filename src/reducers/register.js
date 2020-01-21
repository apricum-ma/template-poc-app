const initialState = {
  displayMessage: ''
}
const registerReducer = (state = initialState, action = {}) => {
  if(action.type === 'GET_CARD_DETAILS_SUCCESS'){
    return { ...state,
      displayMessage:action.payload.data };
  }
  if(action.type === 'GET_CARD_DETAILS_FAILURE'){
    return { ...state,
      displayMessage:action.payload.data };
  }
  return initialState;
}

export default registerReducer;
