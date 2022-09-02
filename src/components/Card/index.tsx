import { CaretDown } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { formatTimeDuration } from '../../utils';

interface CardProps {
  type: 'movie' | 'tvshow' | 'character';
  data: {
    id: number;
    title: string;
    cover_url: string;
    release_date: string;
    duration?: number;
    number_seasons?: number;
  };
}

const paths = {
  movie: 'movies',
  tvshow: 'tvshows',
  character: 'characters',
};

export function Card({ type, data }: CardProps) {
  return (
    <article
      key={data.id}
      className="flex flex-col w-80 shadow-card rounded-[10px] overflow-hidden"
    >
      {/* <div > */}
      <img
        className="h-56 w-full object-cover object-top"
        src={data.cover_url}
        alt=""
      />
      <div className="flex flex-col px-4 py-3">
        <strong className="self-center min-h-[56px] text-base">
          {data.title}
        </strong>

        <div className="flex items-start justify-between">
          <ul className="list-disc px-4 leading-6">
            <li>Release date: {data.release_date}</li>
            {data.duration && <li>{formatTimeDuration(data.duration)}</li>}
            {data.number_seasons && <li>{data.number_seasons} season(s)</li>}
          </ul>
          <NavLink
            className="flex items-center justify-center bg-purple-500 w-10 h-10 rounded-[20px] shadow-button"
            to={`/${paths[type]}/${data.id}`}
          >
            <CaretDown className="text-white" weight="bold" size={28} />
          </NavLink>
        </div>
      </div>
      {/* </div> */}
    </article>
  );
}
