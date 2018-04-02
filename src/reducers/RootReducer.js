import { combineReducers } from 'redux';
import Repos from './ReposReducer';
import userRepos from './UserReposReducer';
import Photos from './PhotosReducer';
import NavReducer from './NavReducer';
import AuthReducer from './AuthReducer';

const appReducer = combineReducers({
  nav: NavReducer,
  Repos,
  userRepos,
  Photos,
  token: AuthReducer
});

// USE appReducer instead
export function rootReducer(state, action) {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
};

// export function logout(type) {
//   return { type: 'USER_LOGOUT' };
// }
