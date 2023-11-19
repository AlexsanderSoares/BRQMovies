import React from 'react';

import { BackgroundImage, Container } from './styles';
import { API_URL_IMAGES } from '@env';
import { Props } from './types';

const Poster: React.FC<Props> = ({ image }) => {
  return (
    <Container testID="poster-container">
      <BackgroundImage 
        source={{ uri: `${API_URL_IMAGES}${image}`}}
        resizeMode="cover"
        testID="poster-background-image"
      />
    </Container>
  );
}

export {Poster};