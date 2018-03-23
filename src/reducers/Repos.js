import * as actionTypes from '../actions/ActionTypes';

export default function Repos(state = { repos: [] }, action) {
  switch (action.type) {
    case actionTypes.GET_REPOS:
      return { ...state, loading: true };
    case actionTypes.GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case actionTypes.GET_REPOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: actionTypes.GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`
      }
    }
  };
}
