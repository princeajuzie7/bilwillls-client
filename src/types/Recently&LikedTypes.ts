

type URLString = string;
type DurationString = `${number}h ${number}m`;
type LikeCountString = `${number}k` | `${number}m`;

type Genre = 'Adventure' | 'Drama' | 'Sci Fi' | 'Action' | 'Comedy' | 'Horror' | string;

interface Movie {
  readonly id: number;
  movieTitle: string;
  movieLikeCount: LikeCountString;
  movieSummary: string;
  trailerLink: URLString;
  isSeasonal: boolean;
  isTrailer: boolean;
    isLive: boolean;
    isLike: boolean;
  movieDuration: DurationString;
  moviePoster: URLString;
  movieGenre: Genre;
}

export type RecentWatchedMovies = Movie[];
