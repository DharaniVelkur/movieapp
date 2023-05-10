import React, { useEffect, useState } from "react";
import Card from "./Card";
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";
import Cradskeleton from "./Cradskeleton";

const Popular = (props) => {
  const [popularMovies, setPopularmovies] = useState([]);
  const [isloading,setIsloading]=useState(true)
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.com}?api_key=c5b7cafa528c0e36e4229e90d508e657&language=en-IN`
    )
      .then((res) => res.json())
      .then((data) => {
        setPopularmovies(data.results);
        setIsloading(false);
      });
  }, []);
  return <>
 <div className="style">
      <h1 className="m-4 text-center">{props.com.toUpperCase()}</h1>
      <div className="d-flex overflow-x-scroll container ">
      {isloading && <Cradskeleton cards={20} width={200} height={200} />}
        {popularMovies.map((movie) => {
          return (<Card movie={movie} isloading={isloading} />);
        })}
      </div>
    </div>
  </>
};

export default Popular;
