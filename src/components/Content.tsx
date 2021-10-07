import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: string;
}

export function Content({movies, selectedGenre}:ContentProps  ) {
    return (
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    )
}