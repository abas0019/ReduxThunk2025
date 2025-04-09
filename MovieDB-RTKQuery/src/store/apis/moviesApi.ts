// Importerer nødvendige funktioner fra Redux Toolkit Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Opretter selve API'et via RTK Query
const moviesApi = createApi({
  // Navn på reduceren i Redux store (bruges internt)
  reducerPath: 'movies',

  // Basis URL for alle API-kald til The Movie Database (TMDB)
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'  // TMDB's API base URL
  }),

  // Her definerer vi alle endpoints (API-kald) som skal bruges i appen
  endpoints(builder) {
    return {
      // 🎬 Endpoint: Hent populære film
      fetchPopularMovies: builder.query({
        query: () => {
          return {
            url: 'movie/popular', // Endpoint til populære film
            params: {
              api_key: '81c50c197b83129dd4fc387ca6c8c323' // Din API-nøgle
            },
            method: 'GET', // HTTP-metoden
          };
        },
      }),

      // 🌟 Endpoint: Hent film med højeste bedømmelse
      fetchHighestRatedMovies: builder.query({
        query: () => {
          return {
            url: 'movie/top_rated', // Endpoint til top-rated film
            params: {
              sort_by: 'vote_average.desc', // Sortér efter højeste vurdering
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
      }),

      // 🔍 Endpoint: Søg efter film ud fra søgeterm
      fetchSearchMovie: builder.query({
        query: (searchTerm) => {
          return {
            url: 'search/movie', // Søg i TMDB efter film
            params: {
              query: searchTerm, // Søgeteksten brugeren har indtastet
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
      }),

      // 🎭 Endpoint: Hent alle filmgenrer (f.eks. Action, Komedie, Sci-fi)
      fetchGenres: builder.query({
        query: () => {
          return {
            url: 'genre/movie/list', // Hent genrelisten
            params: {
              api_key: '81c50c197b83129dd4fc387ca6c8c323',
              language: 'da-DK' // Returner genre-navne på dansk
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

// Eksporterer de hooks, som bruges i komponenter til at kalde data
export const {
  useFetchPopularMoviesQuery,       // Bruges til at hente populære film
  useFetchHighestRatedMoviesQuery,  // Bruges til at hente bedst vurderede film
  useFetchSearchMovieQuery,         // Bruges til søgning
  useFetchGenresQuery,              // Bruges til at hente genrelisten
} = moviesApi;

// Eksporterer selve API-objektet til brug i store.ts
export { moviesApi };
