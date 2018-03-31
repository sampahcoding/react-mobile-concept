import Repos from '../reducers/Repos';
import userRepos from '../reducers/UserRepos';
import Photos from '../reducers/Photos';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';

// Redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';

// NAVIGATION
import { navMiddleware } from 'mobile-insta/src/components/navigator/AppNavigator';
import NavReducer from '../reducers/NavReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, navMiddleware]

export default createStore(
  combineReducers({
    nav: NavReducer,
    Repos,
    userRepos,
    Photos
  }),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);
