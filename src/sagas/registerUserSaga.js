import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AXIOS_INSTANCE, checkStatus } from '../utils/api';
import * as config from '../config/dev.config';
export const createRegStub = payload => {
  const axiosInstance = AXIOS_INSTANCE(config.baseUrl);
  return axiosInstance.post('/register', payload)
}
export function* registerUser(action) {
  try {
    const { payload } = action;
    const { status, data } = yield call(createRegStub,payload);
    if (checkStatus(status)) {
      yield put({
        type: 'REGISTER_USER_SUCCESS',
        payload: {
          ...data,
        },
      });
    }
  } catch (error) {
    yield put({
      type: 'REGISTER_USER_FAILURE',
      payload: {data: 'Error in fetch'},
    });
  }
}

export function* userReg(...args) {
  yield takeLatest('REGISTER_USER', registerUser, ...args);
}
  
export function* registrationSaga() {
  yield all([userReg()]);
}