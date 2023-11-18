import React from 'react';
import { FlashList } from "@shopify/flash-list";

import { Container } from './styles';
import { MovieCard } from '../../components/MovieCard';


const AllMovies: React.FC = () => {
  return (
    <Container>
      <FlashList
        data={[1,2,3,4, 5, 6, 7]}
        renderItem={() => <MovieCard/>}
        numColumns={2}
      />
    </Container>
  );
}

export {AllMovies};