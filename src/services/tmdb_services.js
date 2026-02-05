import api from './api';

export async function getRandomMovie() {
    try {
        const page = Math.floor(Math.random() * 501);
        const response = await api.get(`discover/movie?page=${page}`);
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);

        return movies[randomIndex];
    } catch(error) { 
        throw error;
    }
}

export async function getMovieProvider(movieId) {
    try {
        const { data } =  await api.get(`movie/${movieId}/watch/providers`);

        const br = data.results?.['BR'];
        return {
            flatrate: br?.flatrate ?? [],
            rent: br?.rent ?? [],
            buy: br?.buy ?? [],
        }
        
    } catch(error) {
        throw error;
    }
}

export async function getMovieDetails(movieId) {
    try {
        const { data } = await api.get(`movie/${movieId}`);
        return data;
    } catch (error) {
        throw error
    }
}
