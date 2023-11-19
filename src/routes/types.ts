import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  App: undefined;
  Auth: undefined;
  Login: undefined;
  Home: undefined;
  AllMovies: undefined;
  FavoriteMovies: undefined;
  Movie: MovieParams;
};

type RouteList = 'App' | 'Auth' | 'Login' | 'Home' | 'AllMovies' | 'FavoriteMovies' | 'Movie';

type MovieParams = {
  id: number;
};

type TopTabRoutesProps = {testID?: string}; 

type MovieScreenRouteProp = RouteProp<RootStackParamList, 'Movie'>;

export type { RootStackParamList, MovieScreenRouteProp, TopTabRoutesProps, RouteList };