import {
  SET_FOR_RENT,
  SET_ON_THEATERS,
  SET_POPULAR_MOVIES,
  SET_POPULAR_TV,
  SET_NOW_PLAYING,
} from "./types";

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case SET_POPULAR_TV:
      return {
        ...state,
        popularTvShows: action.payload,
      };
    case SET_FOR_RENT:
      return {
        ...state,
        popularForRentMovies: action.payload,
      };
    case SET_ON_THEATERS:
      return {
        ...state,
        popularOnTvShows: action.payload,
      };
    case SET_NOW_PLAYING:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
