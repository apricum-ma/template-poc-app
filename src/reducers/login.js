const initialState = {
    accountNumber: ''
  }
  const loginReducer = (state = initialState, action = {}) => {
    if(action.type === 'LOGIN_USER_SUCCESS'){
      return { ...state,
        updateRoute: true,
        ...action.payload
      };
    }
    return initialState;
  }
  
  export default loginReducer;
  