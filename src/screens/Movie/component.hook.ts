import { useQuery } from 'react-query';
import { fetchMovieDetails } from '../../services/tmdb';
import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

const useMovieDetails = (movieId: number) => {
  const { data, isLoading, isError } = useQuery(['movieDetails', movieId], () => fetchMovieDetails(movieId));
  const scrollY = useRef(new Animated.Value(0)).current;
  const [buttonChangeColor, setButtonChangeColor] = useState(false);

  const headerOpacity = useRef(
    scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
  ).current;

  useEffect(() => {
    const listenerId = headerOpacity.addListener(({ value }) => {
      if (value === 1) {
        setButtonChangeColor(true);
      } else {
        setButtonChangeColor(false);
      }
    });

    return () => {
      headerOpacity.removeListener(listenerId);
    };
  }, [headerOpacity, scrollY]);

  return { data, isLoading, isError, headerOpacity, buttonChangeColor, scrollY };
};

export default useMovieDetails;