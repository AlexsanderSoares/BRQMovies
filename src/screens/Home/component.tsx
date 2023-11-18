import React from 'react';

import { Container } from './styles';
import { TopTabRoutes } from '../../routes/TopTabRoutes';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <TopTabRoutes/>
    </Container>
  );
}

export {HomeScreen};