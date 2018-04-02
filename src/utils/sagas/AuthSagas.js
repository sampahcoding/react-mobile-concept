import { call, put , takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../../actions/ActionTypes';
import * as API from '../api';
import { delay } from 'redux-saga';


// Worker sagas//
function* authUser(action) {
  try {
    const response = yield call(axios.post,
      `${API.ADDRESS_AUTH}/api/login`,
      { "email": action.email, "password": action.password });
    //yield delay(5000);
    yield put({type:actionTypes.POST_AUTH_SUCCESS, response: response.data.token});
  } catch(e) {
    yield put({type:actionTypes.POST_AUTH_FAIL});
  }
}

// Watcher sagas//
export function* wacthAuthUser() {
  yield takeEvery(actionTypes.POST_AUTH, authUser);
}
