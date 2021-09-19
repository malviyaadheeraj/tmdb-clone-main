import { SET_POPULAR_MOVIES } from "./types";

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
