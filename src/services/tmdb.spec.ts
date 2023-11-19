
import { fetchPopularMovies, fetchMovieDetails } from './tmdb';

jest.mock('./baseApi', () => ({
  api: {
    async get(url: string) {
      if (url.includes('/movie/popular')) {
        return {
          data: {
            results: ['Movie 1', 'Movie 2', 'Movie 3']
          }
        };
      }

      if (url.includes('/movie/')) {
        return {
          data: {
            title: 'Movie Title',
            overview: 'Movie Overview'
          }
        };
      }

      throw new Error('Invalid URL');
    }
  }
}));

describe('Movie API Functions', () => {
  test('fetchPopularMovies should return an array of popular movies', async () => {
    const movies = await fetchPopularMovies();
    expect(Array.isArray(movies)).toBe(true);
    expect(movies).toHaveLength(3);
  });

  test('fetchMovieDetails should return details of a specific movie', async () => {
    const movieId = 123;
    const movieDetails = await fetchMovieDetails(movieId);
    expect(movieDetails.title).toBe('Movie Title');
    expect(movieDetails.overview).toBe('Movie Overview');
  });
});
