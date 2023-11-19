import React from 'react';

import { Container } from './styles';
import { Props } from './types';
import { Heart } from '../../assets/icons';

const FavoriteButton: React.FC<Props> = ({ changeColor }) => {
  return (
    <Container changeColor={changeColor} testID="favorite-button-container">
        <Heart/>
    </Container>
  );
}

export {FavoriteButton};