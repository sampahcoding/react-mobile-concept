import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  "avatar_url": "mobile-insta/assets/loading.gif"
};

export default function UserRepos(state = { user: initialState }, action) {
  switch (action.type) {
    case actionTypes.GET_USER:
      return { ...state, loading: true };
    case actionTypes.GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.response };
    case actionTypes.GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}

export function getUser(user) {
  return { type: actionTypes.GET_USER, user: user};
}
