import React from 'react';

import { BackgroundImage, Container } from './styles';
import { API_URL_IMAGES } from '@env';

const MovieCard: React.FC<{image: string, onPress: () => void}> = ({image, onPress}) => {
  return (
    <Container onPress={onPress} testID="movie-card-container">
      <BackgroundImage
        source={{ uri: `${API_URL_IMAGES}${image}`}}
        resizeMode="cover"
        testID="movie-card-background-image"
      />
    </Container>
  );
}

export {MovieCard};