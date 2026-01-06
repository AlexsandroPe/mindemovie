import api from './api';

export async function getRandomMovie() {
    try {
        const page = Math.floor(Math.random() * 501);
        const response = await api.get(`discover/movie?page=${page}`);
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);

        return movies[randomIndex];
    } catch(error) { 
        console.error(error);
        throw error;
    }
    
}