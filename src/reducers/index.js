import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import register from './register';

const rootReducer = combineReducers({
  register,
  form
});

export default rootReducer;
