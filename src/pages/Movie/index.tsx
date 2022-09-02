import { Article } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function Movie() {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    async function loadMovie() {
      const { data } = await api.get(`/v1/movies/${id}`);
      setMovie({
        title: data.title,
        image: data.cover_url,
        overview: data.overview,
      });
    }

    loadMovie();
  }, []);

  if (!movie) return null;

  return (
    <main className="grid grid-cols-2 gap-7">
      <div className="grid grid-rows-2 gap-8">
        <div className="border rounded-[10px] overflow-hidden shadow-button">
          <header className="flex bg-purple-500 py-5 pl-6">
            <Article className="text-white" weight="bold" size={28} />
            <strong className="pl-7 text-xl text-white">{movie.title}</strong>
          </header>
          <div className="p-7 text-lg">
            <p className="">{movie.overview}</p>
          </div>
        </div>

        <div className="grid grid-rows-2 gap-8">
          <div className="border rounded-[10px] overflow-hidden shadow-button">
            <header className="flex justify-center bg-purple-500 py-5 text-lg text-white gap-3">
              <button>Information</button>
              <span>|</span>
              <button>Cast</button>
            </header>
          </div>
        </div>
      </div>

      <img
        className="rounded-[10px] shadow-button"
        src={movie.image}
        alt={movie.title}
      />
    </main>
  );
}
