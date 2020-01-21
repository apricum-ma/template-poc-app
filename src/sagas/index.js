import { userReg } from './registerUserSaga';
import { userLogin } from './loginSaga';
import { addAcc } from './addAccountSaga';

const rootSaga = {
  userReg,
  userLogin,
  addAcc
};

export default rootSaga;
