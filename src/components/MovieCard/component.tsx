import React from 'react';

import { BackgroundImage, Container } from './styles';

const MovieCard: React.FC = () => {
  return (
    <Container>
      <BackgroundImage
        source={{ uri: 'https://sm.ign.com/t/ign_br/screenshot/default/jw4-2025x3000-online-character-1sht-keanu-v2_gfrq.960.jpg' }}
        resizeMode="cover"
      />
    </Container>
  );
}

export {MovieCard};