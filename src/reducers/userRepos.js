import * as actionTypes from '../actions/ActionTypes';

const initialState = {
  "avatar_url": "https://avatars2.githubusercontent.com/u/1254087?v=4",
   "bio": "Stupid developer",
   "blog": "",
   "company": null,
   "created_at": "2011-12-10T13:47:22Z",
   "email": null,
   "events_url": "",
   "followers": 0,
   "followers_url": "",
   "following": 1,
   "following_url": "",
   "gists_url": "",
   "gravatar_id": "",
   "hireable": true,
   "html_url": "https://github.com/sampahcoding",
   "id": 1254087,
   "location": "Yogyakarta",
   "login": "sampahcoding",
   "name": "Ana",
   "organizations_url": "",
   "public_gists": 10,
   "public_repos": 3,
   "received_events_url": "",
   "repos_url": "",
   "site_admin": false,
   "starred_url": "",
   "subscriptions_url": "",
   "type": "User",
   "updated_at": "2018-03-20T05:48:28Z",
   "url": "https://api.github.com/users/sampahcoding",
};

export default function userRepos(state = { user: initialState }, action) {
  switch (action.type) {
    case actionTypes.GET_USER:
      return { ...state, loading: true };
    case actionTypes.GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.data };
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
  return {
    type: actionTypes.GET_USER,
    payload: {
      request: {
        url: `/users/${user}`
      }
    }
  };
}
