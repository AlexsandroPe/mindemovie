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
        const res =  await api.get(`movie/${movieId}/watch/providers`);
        if(!("BR" in res.data.results)) return {message: "No BR available"};

        const flatrate = res.data.results['BR'].flatrate ? res.data.results['BR'].flatrate.map((pv) => pv['logo_path']) : null;
        const rent = res.data.results['BR'].rent ? res.data.results['BR'].rent.map((pv) => pv['logo_path']): null;
        const buy = res.data.results['BR'].buy ? res.data.results['BR'].buy.map((pv) => pv['logo_path']): null;
        
        return {flatrate, rent, buy};


    } catch(error) {
        console.error(error);
    }
}


//  if (movieProviders.message) {
//           console.log(movieProviders.message)
//           return;
//         }
//         console.log(`THE MOVIE IS \n ${randomMovie.title}`)
//         for(const option in movieProviders) { 
//           const ret = movieProviders[option].map((item) => {
//             return {
//               logoPath: item['logo_path'],
//               providerName: item['provider_name']
//             };
//           })
//           console.log(option, ret);
//             // setWatchOptions([...watchOptions, movieProviders[option]])
//             // console.log(option, movieProviders[option]);
//         }