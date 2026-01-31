import { getMovieDetails, getMovieProvider, getRandomMovie } from '../services/tmdb_services';
import { formatDate } from '../utils/format_date';
import { formatTime } from '../utils/format_time';
import { useEffect, useState } from 'react';

export const useMovieData = () => {
  const [providers, setProviders] = useState([]);
  const [details, setDetails] = useState({});
  const [movie, setMovie] = useState(null)
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => { 
    async function loadMovie() {
      try{
        const randomMovie = await getRandomMovie();
        setMovie(randomMovie);
        
        const movieDetails = await getMovieDetails(randomMovie.id);

        setDetails({
          release: formatDate(movieDetails['release_date']),
          duration: formatTime(movieDetails['runtime']),
          rating: parseFloat(movieDetails['vote_average'].toFixed(2)),
        })
        
        const movieProviders = await getMovieProvider(randomMovie.id);

        if(!movieProviders.br) {
          setProviders([]);
          return
        }

        const provs = Object.values(movieProviders).filter((opt) => typeof opt != "boolean").flatMap(providerArray => providerArray)
        console.log(provs);
        setProviders(provs);

      } catch(error){
        console.error(error)
      }
    }
    loadMovie();
  }, [isWatched])
    
  return {
    movie,
    details,
    providers,
    setIsWatched
  }
}