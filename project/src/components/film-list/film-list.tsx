import { useState } from 'react';
import { Films } from '../../types/film';
import FilmCard from '../film/film';

type FilmListProps = { films: Films };

export function FilmList({ films }: FilmListProps): JSX.Element {
  const [filmId, setFilmId] = useState(-1);
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} onMouseOver={() => { setFilmId(film.id); }} />)}
    </div>
  );
}
