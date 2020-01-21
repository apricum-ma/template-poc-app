import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AXIOS_INSTANCE, checkStatus } from '../utils/api';
import * as config from '../config/dev.config';
export const addUserAcc = payload => {
  const axiosInstance = AXIOS_INSTANCE(config.baseUrl, payload.token);
  return axiosInstance.post('/api/add-account', payload.reqBody)
}
export function* loginUser(action) {
  try {
    const { payload } = action;
    const { status, data} = yield call(addUserAcc,payload);
    if (checkStatus(status)) {
      yield put({
        type: 'ADD_ACCOUNT_SUCCESS',
        payload: {
          ...data,
        },
      });
    }
  } catch (error) {
    yield put({
      type: 'ADD_ACCOUNT_FAILURE',
      payload: {data: 'Error in fetch'},
    });
  }
}

export function* addAcc(...args) {
  yield takeLatest('ADD_ACCOUNT', loginUser, ...args);
}
  
export function* registrationSaga() {
  yield all([addAcc()]);
}