import React, { useEffect, useState } from 'react';
import { FlashList } from "@shopify/flash-list";

import { Container } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { fetchPopularMovies } from '../../services/tmdb';
import { Movie } from './types';


const AllMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  const getMovies = async () => {
    const moviesResponse = await fetchPopularMovies()
    setMovies(moviesResponse) 
  }

  useEffect(() => {
    getMovies()
  }, [])

  const renderItem = ({ item }: {item: Movie}) => (
    <MovieCard onPress={() => console.log(item.id)} image={item.poster_path}/>
  )

  return (
    <Container>
      <FlashList
        data={movies}
        renderItem={renderItem}
        numColumns={2}
      />
    </Container>
  );
}

export {AllMovies};