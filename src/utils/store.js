
import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';

// Redux-saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';

// NAVIGATION
import { navMiddleware } from 'mobile-insta/src/components/navigator/AppNavigator';
import { rootReducer } from '../reducers/RootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, navMiddleware]


export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);
