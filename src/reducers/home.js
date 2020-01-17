const initialState = {
  displayMessage: ''
}
const homeReducer = (state = initialState, action = {}) => {
  if(action.type === 'GET_CARD_DETAILS_SUCCESS'){
    return { ...state,
      displayMessage:action.payload.data };
  }
  return initialState;
}

export default homeReducer;
