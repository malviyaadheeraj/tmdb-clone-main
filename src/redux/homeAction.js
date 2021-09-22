import Axios from "./axios";
import { SET_NOW_PLAYING, SET_POPULAR_MOVIES, SET_POPULAR_TV } from "./types";
const API_KEY = "9f9076158baa1526af5c4cf189980da9";
const baseURL = "https://api.themoviedb.org/3";

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

export const getNowPlaying = () => (dispatch) => {
  Axios.get(
    `${baseURL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_NOW_PLAYING,
      payload: res.data.results,
    });
  });
};
