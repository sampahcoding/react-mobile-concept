import { call, put , takeEvery} from 'redux-saga/effects';
//import { delay } from 'redux-saga';
import axios from 'axios';
import * as actionTypes from '../../actions/ActionTypes';
import * as API from '../api';


// Worker sagas//
function* getUserAsync(action) {
  try {
    console.log("Attempting to get User data with axios..");
    const response = yield call(axios.get, `${API.ADDRESS}/users/${action.user}`);
    //yield delay(5000);
    yield put({type:actionTypes.GET_USER_SUCCESS, response: response.data});
    //console.log(response);
  } catch(e) {
    console.log("Request failed! could not get user data");
    console.log(e);
    yield put({type:actionTypes.GET_USER_FAIL});
  }
}

function* getListReposAsync(action) {
  try {
    console.log("Attempting to get User Repos with axios..");
    const response = yield call(axios.get, `${API.ADDRESS}/users/${action.user}/repos`);
    yield put({type:actionTypes.GET_REPOS_SUCCESS, response: response.data});
    //console.log(response);
  } catch(e) {
    console.log("Request failed! could not get user repos data");
    console.log(e);
    yield put({type:actionTypes.GET_REPOS_FAIL});
  }
}

// Watcher sagas//
export function* watchGetUser() {
  console.log("Redux saga is watching LOAD_USER action listener...");
  yield takeEvery(actionTypes.GET_USER, getUserAsync);
}

export function* wacthGetListRepos() {
  console.log("Redux saga is watching LOAD_REPOS action listener...");
  yield takeEvery(actionTypes.GET_REPOS, getListReposAsync);
}
