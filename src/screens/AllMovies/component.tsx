import React from 'react';
import { FlashList } from "@shopify/flash-list";

import { Container, EmptyListComponent, Message, RetryButton, RetryButtonText } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { Movie } from './types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import usePopularMovies from './component.hook';
import { Text } from 'react-native';
import { RootStackParamList } from '../../routes/types';


const AllMovies: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const { data: movies = [], isLoading, isError, refetch } = usePopularMovies();

  if (isLoading) {
    return (
      <EmptyListComponent>
        <Message>
            Carregando...
        </Message>
      </EmptyListComponent>
    );
  }

  if (isError) {
    return (
      <EmptyListComponent>
        <Message>
            Ops... Ocorreu um erro
        </Message>
        <RetryButton onPress={() => refetch()}>
          <RetryButtonText>
            Tente novamente
          </RetryButtonText>
        </RetryButton>
      </EmptyListComponent>
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
        ListEmptyComponent={(
          <EmptyListComponent>
            <Message>
              Nenhum filme foi encontrado
            </Message>
          </EmptyListComponent>
        )}
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </Container>
  );
}

export {AllMovies};