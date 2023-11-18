import { useQuery } from 'react-query';
import { fetchMovieDetails } from '../../services/tmdb';

const useMovieDetails = (movieId: number) => {
  return useQuery(['movieDetails', movieId], () => fetchMovieDetails(movieId));
};

export default useMovieDetails;
