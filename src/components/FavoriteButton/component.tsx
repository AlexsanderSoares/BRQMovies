import React from 'react';

import { Container } from './styles';
import { Props } from './types';
import { Heart } from '../../assets/icons';

const FavoriteButton: React.FC<Props> = ({ scrolled }) => {
  return (
    <Container scrolled={scrolled}>
        <Heart/>
    </Container>
  );
}

export {FavoriteButton};