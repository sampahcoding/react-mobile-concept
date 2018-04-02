import { all, fork } from 'redux-saga/effects';
import * as GithubSagas from './GithubSagas';
import * as SearchPhotosSagas from './SearchPhotosSagas';
import * as AuthSagas from './AuthSagas';

//======================================//
// Root sagas //
// Only mapping exported watcher function in all sagas //
// Becareful if exporting worker sagas //
//======================================//
export default function* rootSaga() {
  yield all([
    ...Object.values(GithubSagas),
    ...Object.values(SearchPhotosSagas),
    ...Object.values(AuthSagas)
  ].map(fork))
}
