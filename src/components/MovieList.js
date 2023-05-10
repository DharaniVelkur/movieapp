import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import IndividualCard from './IndividualCard';
import Cradskeleton from './Cradskeleton';


const MovieList = () => {
    const [movieList,setMovieList]=useState([]);
    const {movieid}=useParams();
    const [isloading,setIsloading]=useState(true);
    useEffect(()=>{
        getData();
    },[movieid])

    const getData=async ()=>{
      await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=c5b7cafa528c0e36e4229e90d508e657&language=en-US`)
            .then((res) => res.json())
            .then((data) => {setMovieList(data);
            setIsloading(false)});
    }
    return (
  <>
  
  {isloading&& <Cradskeleton width={300} height={700}/> }
        <IndividualCard image={movieList.backdrop_path}
        title={movieList.title}
        desc={movieList.overview}
        released={movieList.released_date}
        link={movieList.homepage}
        genres_array={movieList.genres}
        />
  </>
    
  )
}

export default MovieList
