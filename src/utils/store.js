import Repos from '../reducers/Repos';
import userRepos from '../reducers/userRepos';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';

// Redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

export default createStore(
  combineReducers({
    Repos,
    userRepos
  }),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);
