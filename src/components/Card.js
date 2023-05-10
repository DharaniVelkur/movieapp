import React from "react";
import { Link } from "react-router-dom";
const Card = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`}>
        <div className="card m-1">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              movie && movie.poster_path
            }`}
            className="card-img-top"
            alt="..."
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </Link>
    </>
  );
};
export default Card;
