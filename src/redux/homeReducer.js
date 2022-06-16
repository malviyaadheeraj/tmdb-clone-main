import {
  SET_ACTION_MOVIES,
  SET_HORROR_MOVIES,
  SET_POPULAR_MOVIES,
  SET_POPULAR_TV,
  SET_NOW_PLAYING,
  SET_ROMANCE_MOVIES,
  SET_TRENDING_MOVIES,
  SET_DOCUMENTRIES_MOVIES,
  SET_UP_COMING_MOVIES,
  SET_TOP_RATED_MOVIES,
  SET_AIRING_TODAY_TV,
  SET_ON_TV,
  SET_TOP_RATED_TV,
  SET_PEOPLE,
} from "./types";

const initialState = {};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case SET_ACTION_MOVIES:
      return {
        ...state,
        actionMovies: action.payload,
      };
    case SET_HORROR_MOVIES:
      return {
        ...state,
        horrorMovies: action.payload,
      };
    case SET_ROMANCE_MOVIES:
      return {
        ...state,
        romanceMovies: action.payload,
      };
    case SET_TRENDING_MOVIES:
      return {
        ...state,
        trendingMovies: action.payload,
      };
    case SET_DOCUMENTRIES_MOVIES:
      return {
        ...state,
        documentriesMovies: action.payload,
      };
    case SET_NOW_PLAYING:
      return {
        ...state,
        nowPlayingMovies: action.payload,
      };
    case SET_UP_COMING_MOVIES:
      return {
        ...state,
        upComingMovies: action.payload,
      };
    case SET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    case SET_POPULAR_TV:
      return {
        ...state,
        popularTvShows: action.payload,
      };
    case SET_AIRING_TODAY_TV:
      return {
        ...state,
        airingTodayShows: action.payload,
      };
    case SET_ON_TV:
      return {
        ...state,
        onTvShows: action.payload,
      };
    case SET_TOP_RATED_TV:
      return {
        ...state,
        topRatedTvShows: action.payload,
      };
    case SET_PEOPLE:
      return {
        ...state,
        getPeoples: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
