import * as actionTypes from '../actions/ActionTypes';

function result(state, action) {
  if (action.infinite == true) {
    return state.photos.concat(action.response)
  }
  return action.response
}

export default function Photos(state = { photos: [] }, action) {
  switch (action.type) {
    case actionTypes.GET_PHOTOS:
      return { ...state, loading: true };
    case actionTypes.GET_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: result(state, action) };
    case actionTypes.GET_PHOTOS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching repositories'
      };
    default:
      return state;
  }
}

export function listPhotos(params) {
  return { type: actionTypes.GET_PHOTOS, params: params };
}
