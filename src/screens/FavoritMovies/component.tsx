import React, {useState } from 'react';
import { FlashList } from "@shopify/flash-list";

import { Container } from './styles';
import { MovieCard } from '../../components/MovieCard';
import { Movie } from './types';


const FavoritMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      adult: false,
      backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      genre_ids: [
        18,
        36
      ],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview: "A história do físico americano J. Robert Oppenheimer, seu papel no Projeto Manhattan e no desenvolvimento da bomba atômica durante a Segunda Guerra Mundial, e o quanto isso mudaria a história do mundo para sempre.",
      popularity: 2590.24,
      poster_path: "/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.202,
      vote_count: 4611
    },
    {
      adult: false,
      backdrop_path: "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
      genre_ids: [
        27,
        9648
      ],
      id: 507089,
      original_language: "en",
      original_title: "Five Nights at Freddy's",
      overview: "Enquanto passa sua primeira noite no trabalho, um problemático guarda de segurança da Pizzaria Freddy Fazbear logo percebe que não será uma tarefa fácil sobreviver ao seu primeiro turno.",
      popularity: 1617.893,
      poster_path: "/1yUbmAiw2cUSpyXNIaiST7JzCtG.jpg",
      release_date: "2023-10-25",
      title: "Five Nights at Freddy's - O Pesadelo Sem Fim",
      video: false,
      vote_average: 7.949,
      vote_count: 2315
    },
    {
      adult: false,
      backdrop_path: "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
      genre_ids: [
        878,
        28,
        53
      ],
      id: 670292,
      original_language: "en",
      original_title: "The Creator",
      overview: "Em meio a uma futura guerra entre a raça humana e as forças da inteligência artificial, Joshua, um endurecido ex-agente das forças especiais que lamenta o desaparecimento de sua esposa, é recrutado para caçar e matar o Criador, o indescritível arquiteto da IA avançada que desenvolveu uma arma misteriosa com o poder de acabar com a guerra - e a própria humanidade.",
      popularity: 1595.817,
      poster_path: "/5MPdNRHzd0NbOJbrrXO77DVHP4n.jpg",
      release_date: "2023-09-27",
      title: "Resistência",
      video: false,
      vote_average: 7.22,
      vote_count: 818
    },
  ])

  const renderItem = ({ item }: {item: Movie}) => (
    <MovieCard onPress={() => console.log(item.id)} image={item.poster_path} />
  )

  return (
    <Container testID="favorite-movies-container">
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