import { userReg } from './registerUserSaga';
import { userLogin } from './loginSaga';

const rootSaga = {
  userReg,
  userLogin
};

export default rootSaga;
