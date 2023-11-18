import React from 'react';
import { StatusBar, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Container, InfoCardsContainer, InfoCardsRow } from './styles';
import { Poster } from '../../components/Poster';
import { InfoMovie, SinopseContainer, SinopseTitle, SinopseText, Title } from './styles';
import { InfoCard } from '../../components/InfoCard';
import { Calendar, HeartOrange, Notification, Star } from '../../assets/icons';
import useMovieDetails from './component.hook';
import { RouteParams } from './types';
import { convertDateToBrazilianFormat } from '../../utils/covertDate';

const MovieScreen: React.FC = () => {
  const route = useRoute();

  const params = route.params as RouteParams

  const { data, isLoading, isError } = useMovieDetails(params.id);

  if (isLoading) {
    return (
      <Container>
        <Text>Carregando...</Text>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Text>Ocorreu um erro</Text>
      </Container>
    );
  }

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Container>
        <Poster image={data.poster_path}/>
        <InfoMovie>
          <Title>
            {data.original_title}
          </Title>
          <SinopseContainer>
            <SinopseTitle>
              SINOPSE
            </SinopseTitle>
            <SinopseText>
            {data.overview}
            </SinopseText>
          </SinopseContainer>
          <InfoCardsContainer>
            <InfoCardsRow>
              <InfoCard label='Votos' text={data.vote_count} Icon={HeartOrange}/>
              <InfoCard label='Popularidade' text={data.popularity} Icon={Star}/>
            </InfoCardsRow>
            <InfoCardsRow>
              <InfoCard label='Lançamento' text={convertDateToBrazilianFormat(data.release_date)} Icon={Calendar}/>
              <InfoCard label='Status' text={data.status} Icon={Notification}/>
            </InfoCardsRow>
          </InfoCardsContainer>
        </InfoMovie>
      </Container>
    </>
  );
};

export { MovieScreen };
