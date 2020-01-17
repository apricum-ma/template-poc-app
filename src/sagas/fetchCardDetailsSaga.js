import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AXIOS_INSTANCE, checkStatus } from '../utils/api';
import * as config from '../config/dev.config';

export function* fetchDetail(action) {
  try {
    const axiosInstance = AXIOS_INSTANCE(config.cardDetails);
    const { status, data} = yield call(axiosInstance);
    if (checkStatus(status)) {
      yield put({
        type: 'GET_CARD_DETAILS_SUCCESS',
        payload: {
          ...data,
        },
      });
    }
  } catch (error) {
    return {
      status: 'GET_CARD_DETAILS_FAILURE',
      data: error,
    };
  }
}

export function* getCardDetails(...args) {
  yield takeLatest('GET_CARD_DETAILS', fetchDetail, ...args);
}
  
export function* cardSaga() {
  yield all([getCardDetails()]);
}