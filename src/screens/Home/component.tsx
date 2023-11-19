import React from 'react';

import { Container } from './styles';
import { TopTabRoutes } from '../../routes/TopTabRoutes';

const HomeScreen: React.FC = () => {
  return (
    <Container testID="home-screen-container">
      <TopTabRoutes testID="top-tab-routes"/>
    </Container>
  );
}

export {HomeScreen};