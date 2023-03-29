import { Films } from '../../types/film';
import { FilmList } from '../film-list/film-list';

type SameFilmsProps = {
  films: Films;
}

export default function SameFilms({ films }: SameFilmsProps): JSX.Element | null {
  return (
    films.length !== 0 ?
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmList films={films} />
      </section>
      : null


  );
}
