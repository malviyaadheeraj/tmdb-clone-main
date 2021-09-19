// import React, { useEffect, useState } from "react";
// import axios from "../../redux/axios";

// const ForRent = () => {
//   const [tvShows, setTvShows] = useState("");
//   const fetchMostPopular = `movie/popular?api_key=9f9076158baa1526af5c4cf189980da9&language=en-US&page=1`;
//   const base_url = "https://image.tmdb.org/t/p/original/";

//   useEffect(() => {
//     axios
//       .get(fetchMostPopular)
//       .then((res) => setTvShows(res.data.results))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="streamingRow">
//       ForRent
//       {/* {tvShows &&
//         tvShows.map((tvShow, key) => (
//           <div className="streamingCard" key={key}>
//             <img
//               src={`${base_url}${tvShow.poster_path}`}
//               alt=""
//               className="streamingImage"
//             />
//             <small>
//               83 <p>%</p>
//             </small>
//             <h4>{tvShow.title}</h4>
//             <span>{tvShow.release_date}</span>
//           </div>
//         ))} */}
//     </div>
//   );
// };

// export default ForRent;
