import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { FilterPopup } from '../../components/FilterPopup';
import { Pagination } from '../../components/Pagination';
import { api } from '../../services/api';

export function Movies() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const { data } = await api.get('/v1/movies', {
        params: {
          limit: 6,
        },
      });
      setMovies(data.data);
    }

    loadMovies();
  }, []);

  return (
    <main className="flex max-w-max pl-14 pt-3">
      <section>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {movies.map((movie) => (
            <Card key={movie.id} type="movie" data={movie} />
          ))}
        </div>
        <Pagination />
      </section>
      <FilterPopup />
    </main>
  );
}
