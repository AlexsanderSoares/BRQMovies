import { API_KEY } from "@env";
import { api } from "./baseApi";

export const fetchPopularMovies = async () => {
    try {
        const response = await api.get(`/movie/popular?api_key=${API_KEY}&language=pt-BR`);
        return response.data.results;
    } catch (error: any) {
        throw new Error(error.response.data.status_message);
    }
};
  
export const fetchMovieDetails = async (movieId: number) => {
    try {
        const response = await api.get(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.status_message);
    }
};

export const fetchFavoritMovies = async (movieId: number) => {
    try {
        const response = await api.get(`/account/null/favorite/movies`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.status_message);
    }
};