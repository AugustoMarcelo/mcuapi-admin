import { FilmStrip, Television } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { api } from '../../services/api';

export function Home() {
  const [movies, setMovies] = useState<any[]>([]);
  const [tvshows, setTVShows] = useState<any[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const { data } = await api.get('/v1/movies');
      setMovies(data.data);
    }

    loadMovies();
  }, []);

  useEffect(() => {
    async function loadTVShows() {
      const { data } = await api.get('/v1/tvshows');
      setTVShows(data.data);
    }

    loadTVShows();
  }, []);

  return (
    <main className="max-w-max">
      <section className="max-w-max">
        <header className="flex items-center w-60 bg-red-500 py-2 px-3 mb-5 rounded-[10px] shadow-button">
          <FilmStrip className="text-white mr-4" size={24} />
          <h6 className="text-white text-xl">Movies</h6>
        </header>

        <div className="flex gap-7 overflow-x-auto p-1 -ml-1">
          {movies.map((movie) => (
            <Card key={movie.id} type="movie" data={movie} />
          ))}
        </div>
      </section>

      <section className="max-w-max mt-7">
        <header className="flex items-center w-60 bg-red-500 py-2 px-3 mb-5 rounded-[10px] shadow-button">
          <Television className="text-white mr-4" size={24} />
          <h6 className="text-white text-xl">TV Shows</h6>
        </header>

        <div className="flex gap-7 overflow-x-auto p-1 -ml-1">
          {tvshows.map((tvshow) => (
            <Card key={tvshow.id} type="tvshow" data={tvshow} />
          ))}
        </div>
      </section>
    </main>
  );
}
