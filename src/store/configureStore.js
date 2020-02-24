import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import getDataReducer from './reducers/GetDataReducer/GetDataReducer';
import accountVerifData from './reducers/SignupReducer/ValidationCodeReducer';
import codeIsValid from './reducers/SignupReducer/CodeValidationreducer';
import userRegisterInfo from './reducers/SignupReducer/StoreUserInfoReducer';

const reducers = combineReducers({
  userRegisterInfo: userRegisterInfo,
  codeIsValid: codeIsValid,
  accountVerifData: accountVerifData,
  getDataReducer: getDataReducer,
  router: routerReducer,
});

export default reducers;