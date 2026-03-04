import { useCallback, useState, useEffect } from 'react';
import { loadMovie } from '../usecases/loadMovie';

export const useMovieData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movieData, setMovieData] = useState(null);

  const handleMovie =  useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const movieData = await loadMovie();
      setMovieData(movieData);

    } catch (error) {
      console.error(error);
      setError("Erro ao carregar o filme");
    } finally {
      setLoading(false);
    }
  }, []);
  
  useEffect(() => {
    handleMovie();
  }, [handleMovie]);

  return {
    error,
    loading,
    movieData: {
      movie:  movieData?.movie,
      details: {
        rating:  movieData?.details?.rating,
        duration:  movieData?.details?.duration,
        release:  movieData?.details?.release
      },
      providers: movieData?.providers,
    },
    handleMovie
  }
}