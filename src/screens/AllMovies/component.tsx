import React, { useEffect, useState } from 'react';
import { FlashList } from "@shopify/flash-list";

import { Container } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { fetchPopularMovies } from '../../services/tmdb';
import { Movie } from './types';
import { useNavigation } from '@react-navigation/native';


const AllMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const navigation = useNavigation()

  const getMovies = async () => {
    const moviesResponse = await fetchPopularMovies()
    setMovies(moviesResponse) 
  }

  useEffect(() => {
    getMovies()
  }, [])

  const renderItem = ({ item }: {item: Movie}) => (
    <MovieCard onPress={() => navigation.navigate('Movie', {id: item.id})} image={item.poster_path}/>
  )

  return (
    <Container>
      <FlashList
        data={movies}
        renderItem={renderItem}
        numColumns={2}
        estimatedItemSize={100}
      />
    </Container>
  );
}

export {AllMovies};