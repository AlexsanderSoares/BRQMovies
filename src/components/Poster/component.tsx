import React from 'react';

import { BackgroundImage, Container } from './styles';
import { API_URL_IMAGES } from '@env';
import { Props } from './types';

const Poster: React.FC<Props> = ({ image }) => {
  return (
    <Container>
      <BackgroundImage 
        source={{ uri: `${API_URL_IMAGES}${image}`}}
        resizeMode="cover"/>
    </Container>
  );
}

export {Poster};