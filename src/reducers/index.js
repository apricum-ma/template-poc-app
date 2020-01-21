import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import home from './home';

const rootReducer = combineReducers({
  home,
  form
});

export default rootReducer;
