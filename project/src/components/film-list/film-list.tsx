import { useState } from 'react';
import { Film, Films } from '../../types/film';
import FilmCard from '../film/film';


type FilmListProps = { films: Films };

export function FilmList({ films }: FilmListProps): JSX.Element {
  const [filmId, setFilmId] = useState(-1);

  const createFilmCard = (film: Film) => {
    let timer: NodeJS.Timeout;
    const onMouseEnter = () => {
      timer = setTimeout(() => setFilmId(film.id), 1000);
    };
    const onMouseLeave = () => {
      clearTimeout(timer);
      setFilmId(-1);
    };

    return (
      <FilmCard film={film}
        key={film.id}
        onMouseEnter={onMouseEnter}
        isPlaying={filmId === film.id}
        isReset={filmId !== film.id}
        onMouseLeave={onMouseLeave}
      />);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => createFilmCard(film))}
    </div>
  );
}
