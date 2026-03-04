import { getRandomMovie, getMovieDetails, getMovieProvider } from '../services/tmdb_services';
import { formatTime } from "../utils/format_time";
import { formatDate } from "../utils/format_date";

export async function loadMovie() {
    let  movie;

    try {
        movie = await getRandomMovie();
    } catch (error) {
        throw new Error("Erro ao buscar filme");
    }
    const [detailsResult, providersResult] = await Promise.allSettled([
        getMovieDetails(movie.id),
        getMovieProvider(movie.id)
    ]);

    const details = detailsResult.status === 'fulfilled' ? detailsResult.value : null;
    const providers = providersResult.status === 'fulfilled' ? providersResult.value : null;
    const {flatrate, rent, buy} = providers;

    return {
        movie,
        details: {
            rating:   details?.['vote_average'] != null ? parseFloat(details['vote_average']).toFixed(2) : "--",
            duration: details?.['runtime'] != null ? formatTime(details['runtime']) : "--",
            release: details?.['release_date'] != null ? formatDate(details['release_date']) : "--",
        },
        providers: [...flatrate, ...rent, ...buy]
    }
}