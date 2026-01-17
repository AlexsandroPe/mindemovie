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


export async function getMovieProvider(movieId) {
    try {
        const { data } =  await api.get(`movie/${movieId}/watch/providers`);
        if(!("BR" in data.results)) return {message: "No BR available"};

        const flatrate = data.results['BR'].flatrate ? data.results['BR'].flatrate.map((pv) => pv['logo_path']) : null;
        const rent = data.results['BR'].rent ? data.results['BR'].rent.map((pv) => pv['logo_path']): null;
        const buy = data.results['BR'].buy ? data.results['BR'].buy.map((pv) => pv['logo_path']): null;
        
        return {flatrate, rent, buy};


    } catch(error) {
        return error
    }
}

export async function getMovieDetails(movieId) {
    try {
        const { data } = await api.get(`movie/${movieId}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}