export interface FilmModel {
    adult?: boolean;
    first_air_date?: string;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    origin_country?: string[];
    original_language: string;
    original_name?: string;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date?: string;
    title?: string;
    name?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
  }