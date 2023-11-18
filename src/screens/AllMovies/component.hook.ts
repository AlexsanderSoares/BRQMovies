import { useQuery } from 'react-query';
import { fetchPopularMovies } from '../../services/tmdb';

const usePopularMovies = () => {
  return useQuery('popularMovies', fetchPopularMovies);
};

export default usePopularMovies;
