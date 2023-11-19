import { renderHook } from '@testing-library/react-hooks';
import useMovieDetails from './component.hook';
import { useQuery } from 'react-query';

jest.mock('react-query');

describe('useMovieDetails', () => {
  it('should fetch movie details correctly', async () => {
    const movieId = 123;

    const mockMovieDetails = { title: 'Movie Title', id: movieId };


    (useQuery as jest.Mock).mockReturnValue({
      data: mockMovieDetails,
      isLoading: false,
      isError: false,
      isSuccess: true,
      refetch: jest.fn(),
    });

    const { result } = renderHook(() => useMovieDetails(movieId));

    expect(result.current.data).toEqual(mockMovieDetails);

    expect(useQuery).toHaveBeenCalledWith(['movieDetails', movieId], expect.any(Function));

  });
});
