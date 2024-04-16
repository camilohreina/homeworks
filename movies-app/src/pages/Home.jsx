import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Capsule from '../components/Capsule';
import { movies, genres } from '../data/movies.json';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <SearchBar />
      <div className="flex max-w-4xl w-full flex-row flex-wrap gap-4 justify-center my-16">
        {genres.map((genre) => (
          <Capsule key={genre} genre={genre} />
        ))}
      </div>

      <div className="flex flex-row my-16 flex-wrap w-full gap-8 items-center justify-center">
        {movies.slice(0, 10).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
