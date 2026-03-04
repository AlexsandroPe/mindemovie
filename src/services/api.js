import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_TOKEN}`
    }
});


export default api;