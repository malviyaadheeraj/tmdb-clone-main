import Axios from "./axios";
import {
  SET_ACTION_MOVIES,
  SET_NOW_PLAYING,
  SET_POPULAR_MOVIES,
  SET_POPULAR_TV,
  SET_HORROR_MOVIES,
  SET_ROMANCE_MOVIES,
  SET_TRENDING_MOVIES,
  SET_DOCUMENTRIES_MOVIES,
  SET_UP_COMING_MOVIES,
  SET_TOP_RATED_MOVIES,
  SET_AIRING_TODAY_TV,
  SET_ON_TV,
  SET_TOP_RATED_TV,
  SET_PEOPLE,
  SET_SINGLE_POPULAR_TV,
} from "./types";
const API_KEY = "9f9076158baa1526af5c4cf189980da9";
const baseURL = "https://api.themoviedb.org/3";

// GET POPULAR MOVIES
export const getPopularMovies = () => (dispatch) => {
  Axios.get(
    `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_POPULAR_MOVIES,
      payload: res.data.results,
    });
  });
};

// GET ACTION MOVIES
export const getActionMovies = () => (dispatch) => {
  Axios.get(`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`).then(
    (res) => {
      dispatch({
        type: SET_ACTION_MOVIES,
        payload: res.data.results,
      });
    }
  );
};

// GET HORROR MOVIES
export const getHorrorMovies = () => (dispatch) => {
  Axios.get(`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`).then(
    (res) => {
      dispatch({
        type: SET_HORROR_MOVIES,
        payload: res.data.results,
      });
    }
  );
};

// GET ROMANCE MOVIES
export const getRomanceMovies = () => (dispatch) => {
  Axios.get(
    `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
  ).then((res) => {
    dispatch({
      type: SET_ROMANCE_MOVIES,
      payload: res.data.results,
    });
  });
};

// GET TRENDING MOVIES
export const getTrendingMovies = () => (dispatch) => {
  Axios.get(
    `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en_US`
  ).then((res) => {
    dispatch({
      type: SET_TRENDING_MOVIES,
      payload: res.data.results,
    });
  });
};

// GET DOCUMENTRIES MOVIES
export const getDocumentriesMovies = () => (dispatch) => {
  Axios.get(`${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`).then(
    (res) => {
      dispatch({
        type: SET_DOCUMENTRIES_MOVIES,
        payload: res.data.results,
      });
    }
  );
};

// GET NOW PLAYING
export const getNowPlaying = () => (dispatch) => {
  Axios.get(
    `${baseURL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=2`
  ).then((res) => {
    dispatch({
      type: SET_NOW_PLAYING,
      payload: res.data.results,
    });
  });
};

// GET UP COMING MOVIES
export const getUpComingMovies = () => (dispatch) => {
  Axios.get(
    `${baseURL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_UP_COMING_MOVIES,
      payload: res.data.results,
    });
  });
};

// GET TOP RATED MOVIES
export const getTopRatedMovies = () => (dispatch) => {
  Axios.get(
    `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_TOP_RATED_MOVIES,
      payload: res.data.results,
    });
  });
};

// GET POPULAR TV SHOWS
export const getPopularTv = () => (dispatch) => {
  Axios.get(
    `${baseURL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_POPULAR_TV,
      payload: res.data.results,
    });
  });
};

// GET SINGLE POPULAR TV SHOWS
export const getSinglePopularTv = (data) => (dispatch) => {
  Axios.get(`${baseURL}/tv/${data.id}?api_key=${API_KEY}&language=en-US`).then(
    (res) => {
      dispatch({
        type: SET_SINGLE_POPULAR_TV,
        payload: res.data,
      });
    }
  );
};

// GET AIRING TV SHOWS
export const getAiringTvShows = () => (dispatch) => {
  Axios.get(
    `${baseURL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_AIRING_TODAY_TV,
      payload: res.data.results,
    });
  });
};

// GET ON TV SHOWS
export const getOnTvShows = () => (dispatch) => {
  Axios.get(
    `${baseURL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_ON_TV,
      payload: res.data.results,
    });
  });
};

// GET TOP RATED TV SHOWS
export const getTopRatedTvShows = () => (dispatch) => {
  Axios.get(
    `${baseURL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_TOP_RATED_TV,
      payload: res.data.results,
    });
  });
};

// GET PEOPLE
export const getPeople = () => (dispatch) => {
  Axios.get(
    `${baseURL}/person/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_PEOPLE,
      payload: res.data.results,
    });
  });
};
