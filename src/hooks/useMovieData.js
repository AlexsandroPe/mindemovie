import { getMovieDetails, getMovieProvider, getRandomMovie } from '../services/tmdb_services';
import { formatDate } from '../utils/format_date';
import { formatTime } from '../utils/format_time';
import { useEffect, useState } from 'react';

export const useMovieData = () => {
  const [providers, setProviders] = useState([]);
  const [details, setDetails] = useState({
    release: '--',
    duration: '--',
    rating: 0,
  });
  const [movie, setMovie] = useState(null)

  const loadMovie = async () => {
    try{
      const randomMovie = await getRandomMovie();
      setMovie(randomMovie);
      
      const movieDetails = await getMovieDetails(randomMovie.id);
      setDetails({
        release: formatDate(movieDetails['release_date']),
        duration: formatTime(movieDetails['runtime']),
        rating: parseFloat(movieDetails['vote_average'].toFixed(2)),
      })
      
      const { flatrate, rent, buy } = await getMovieProvider(randomMovie.id);
      const provs = [...flatrate, ...rent, ...buy];
      setProviders(provs);
    
    } catch(error){
      console.error(error)
    }
  }

  const nextMovie = () => {
    loadMovie();
  }

  useEffect(() => {   
    loadMovie();
  }, []);
  
  return {
    movie,
    details,
    providers,
    nextMovie
  }
}