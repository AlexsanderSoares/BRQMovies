import React from 'react';

import { Container } from './styles';
import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const MovieScreen: React.FC = () => {
  const route = useRoute()
  console.log(route.params?.id)
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Container>

      </Container>
    </>
  );
}

export {MovieScreen};