import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import getDataReducer from './reducers/GetDataReducer/GetDataReducer';
import accountVerifData from './reducers/SignupReducer/ValidationCodeReducer';
import codeIsValid from './reducers/SignupReducer/CodeValidationreducer';

const reducers = combineReducers({
  codeIsValid: codeIsValid,
  accountVerifData: accountVerifData,
  getDataReducer: getDataReducer,
  router: routerReducer,
});

export default reducers;