import * as actionTypes from '../actions/ActionTypes';

export default function Photos(state = { photos: [] }, action) {
  switch (action.type) {
    case actionTypes.GET_PHOTOS:
      return { ...state, loading: true };
    case actionTypes.GET_PHOTOS_SUCCESS:
      return { ...state, loading: false, photos: action.response };
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

export function listPhotos(q) {
  return { type: actionTypes.GET_PHOTOS, q: q };
}
