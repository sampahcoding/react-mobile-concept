import Repos from '../reducers/Repos';
import userRepos from '../reducers/userRepos';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';

// Redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';

// NAVIGATION
import { navMiddleware } from '../components/AppNavigator';
import NavReducer from '../reducers/NavReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, navMiddleware]

export default createStore(
  combineReducers({
    nav: NavReducer,
    Repos,
    userRepos
  }),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);
