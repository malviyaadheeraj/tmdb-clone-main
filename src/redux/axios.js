import axios from "axios";

const Axios = axios.create({
  base_url: "https://api.themoviedb.org/3",
});

export default Axios;
