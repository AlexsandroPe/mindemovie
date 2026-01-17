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

        if(!data.results['BR']) return { br: false }

        return {
            br: true,
            flatrate: data.results['BR'].flatrate ?? [],
            rent: data.results['BR'].rent ?? [],
            buy: data.results['BR'].buy ?? [],
        }

        // const flatrate = data.results['BR'].flatrate ? data.results['BR'].flatrate.map((pv) => pv['logo_path']) : null;
        // const rent = data.results['BR'].rent ? data.results['BR'].rent.map((pv) => pv['logo_path']): null;
        // const buy = data.results['BR'].buy ? data.results['BR'].buy.map((pv) => pv['logo_path']): null;
        
        // return {flatrate, rent, buy};


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