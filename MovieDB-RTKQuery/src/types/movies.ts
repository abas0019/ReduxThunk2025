// API-respons for en liste af film
export interface Movie {
   id: number;
   adult: boolean;
   poster_path: string;
   realease_date: string;
   overview: string;
    title : string;
    genres: number;
      vote_average: number;
  }
  
  // Repræsenterer en film, som TheMovieDB returnerer
  export interface MovieResponse {
     adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
  }
  
  // Vores egen film-model, som vi bruger i applikationen
  export interface MovieResult {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    releaseDate: string;
    rating: number;
  }