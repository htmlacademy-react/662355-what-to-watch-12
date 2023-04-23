import { useEffect, useState } from 'react';
import { FilmList } from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genre-list/genre-list';
import Promo from '../../components/promo/promo';
import { useAppSelector } from '../../hooks';
import { ALL_GENRES } from '../../const';
import { getFavoriteFilms, getFilms, getGenre, getPromo } from '../../store/app-process/selectors';

export default function MainScreen(): JSX.Element {
  const films = useAppSelector(getFilms);
  const genre = useAppSelector(getGenre);
  const promo = useAppSelector(getPromo);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const [filmsByGenre, setFilmsByGenre] = useState(films);

  useEffect(() => {
    let filteredFilms = films;
    if (genre !== ALL_GENRES) {
      filteredFilms = films.filter((film) => film.genre === genre);
    }
    setFilmsByGenre(filteredFilms);
  }, [genre, films]);

  return (
    <>
      {promo !== null && <Promo film={promo} filmsFavourite={favoriteFilms.length} />}
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films} />
          <FilmList films={filmsByGenre} />

        </section>

        <Footer />
      </div>
    </>);
}
