import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import register from './register';
import login from './login';

const rootReducer = combineReducers({
  register,
  login,
  form
});

export default rootReducer;
