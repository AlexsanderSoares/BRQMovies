import axios from 'axios';
import { fetchPopularMovies, fetchMovieDetails } from './tmdb';

jest.mock('axios');

describe('Movie API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('handles API errors', async () => {
    const errorMessage = 'Not Found';
    const errorResponse = {
      response: {
        data: {
          status_message: errorMessage,
        },
      },
    };

    (axios.get as jest.Mock).mockRejectedValue(errorResponse);

    await expect(fetchPopularMovies()).rejects.toThrowError(errorMessage);

    const movieId = 123;
    await expect(fetchMovieDetails(movieId)).rejects.toThrowError(errorMessage);
  });

  it('fetches popular movies correctly', async () => {
    const mockedResponse = {
      data: {
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
        ],
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockedResponse);

    const movies = await fetchPopularMovies();

    expect(movies).toEqual(mockedResponse.data.results);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/movie/popular', {
      params: {
        api_key: 'YOUR_API_KEY',
        language: 'pt-BR',
      },
    });
  });

  it('fetches movie details correctly', async () => {
    const movieId = 123;
    const mockedResponse = {
      data: {
        id: movieId,
        title: 'Movie 123',
      },
    };

    (axios.get as jest.Mock).mockResolvedValue(mockedResponse);

    const movieDetails = await fetchMovieDetails(movieId);

    expect(movieDetails).toEqual(mockedResponse.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`/movie/${movieId}`, {
      params: {
        api_key: 'YOUR_API_KEY',
        language: 'pt-BR',
      },
    });
  });
});
