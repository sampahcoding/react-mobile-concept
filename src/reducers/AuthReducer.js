import * as actionTypes from '../actions/ActionTypes';

export default function AuthReducer(state = { key: false, loading: false }, action) {
  switch (action.type) {
    case actionTypes.POST_AUTH:
      return { ...state, loading: true };
    case actionTypes.POST_AUTH_SUCCESS:
      return { ...state, loading: false, key: action.response };
    case actionTypes.POST_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while authenticating user'
      };
    default:
      return state;
  }
}

export function authUser(email, password) {
  return { type: actionTypes.POST_AUTH, email: email, password: password };
}
