import Axios from "./axios";
import { SET_POPULAR_MOVIES } from "./types";
// const API_KEY = "9f9076158baa1526af5c4cf189980da9";

export const getPopularMovies = () => (dispatch) => {
  Axios.get(
    `movie/popular?api_key=9f9076158baa1526af5c4cf189980da9&language=en-US&page=1`
  ).then((res) => {
    dispatch({
      type: SET_POPULAR_MOVIES,
      payload: res.data,
    });
    console.log(res);
  });
};

getPopularMovies();
