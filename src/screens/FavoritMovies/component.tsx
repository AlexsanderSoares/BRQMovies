import React, { useEffect, useState } from 'react';
import { FlashList } from "@shopify/flash-list";

import { Container } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { Movie } from './types';


const FavoritMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {"adult": false, "backdrop_path": "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg", "genre_ids": [27, 9648, 53], "id": 968051, "original_language": "en", "original_title": "The Nun II", "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.", "popularity": 453.623, "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg", "release_date": "2023-09-06", "title": "The Nun II", "video": false, "vote_average": 6.911, "vote_count": 1422},
    {"adult": false, "backdrop_path": "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg", "genre_ids": [27, 9648, 53], "id": 968051, "original_language": "en", "original_title": "The Nun II", "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.", "popularity": 453.623, "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg", "release_date": "2023-09-06", "title": "The Nun II", "video": false, "vote_average": 6.911, "vote_count": 1422},
    {"adult": false, "backdrop_path": "/gN79aDbZdaSJkFS1iVA17HplF2X.jpg", "genre_ids": [27, 9648, 53], "id": 968051, "original_language": "en", "original_title": "The Nun II", "overview": "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.", "popularity": 453.623, "poster_path": "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg", "release_date": "2023-09-06", "title": "The Nun II", "video": false, "vote_average": 6.911, "vote_count": 1422}
  ])

  // const getMovies = async () => {
  //   const moviesResponse = await fetchPopularMovies()
  //   setMovies(moviesResponse) 
  // }

  // useEffect(() => {
  //   getMovies()
  // }, [])

  const renderItem = ({ item }: {item: Movie}) => (
    <MovieCard onPress={() => console.log(item.id)} image={item.poster_path}/>
  )

  return (
    <Container>
      <FlashList
        data={movies}
        renderItem={renderItem}
        numColumns={2}
        estimatedItemSize={100}
      />
    </Container>
  );
}

export {FavoritMovies};