import React from 'react';
import { FlashList } from "@shopify/flash-list";

import { Container } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { Movie } from './types';
import { useNavigation } from '@react-navigation/native';
import usePopularMovies from './component.hook';
import { Text } from 'react-native';


const AllMovies: React.FC = () => {
  const navigation = useNavigation()

  const { data: movies = [], isLoading, isError, error } = usePopularMovies();

  if (isLoading) {
    return (
      <Container>
        <Text>
          Carregando...
        </Text>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Text>
          Ocorreu um erro
        </Text>
      </Container>
    )
  }


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