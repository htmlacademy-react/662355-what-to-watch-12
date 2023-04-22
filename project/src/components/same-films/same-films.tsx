import { memo } from 'react';
import { COUNT_FILMS_IN_SIMILAR_LIST } from '../../const';
import { Films } from '../../types/film';
import { FilmList } from '../film-list/film-list';

type SameFilmsProps = {
  films: Films;
}

function SameFilms({ films }: SameFilmsProps): JSX.Element | null {
  return (
    films.length !== 0 ?
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmList films={films.slice(0, COUNT_FILMS_IN_SIMILAR_LIST)} />
      </section>
      : null
  );
}

export default memo(SameFilms);
