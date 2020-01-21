const initialState = {
  accountNumber: ''
}
const registerReducer = (state = initialState, action = {}) => {
  if(action.type === 'REGISTER_USER_SUCCESS'){
    return { ...state,
      accountNumber:action.payload.accountNumber,
      updateRoute: true
    };
  }
  return state;
}

export default registerReducer;
