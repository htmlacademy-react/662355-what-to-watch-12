
import cn from 'classnames';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilms, changeGenre } from '../../store/action';
import { Films } from '../../types/film';

type GenreListProps = {
  films: Films;
}

const ALL_GENRES = 'All genres';

export default function GenreList({ films }: GenreListProps): JSX.Element {
  const currGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let filmsByGenre = films;
    if (currGenre !== ALL_GENRES) {
      filmsByGenre = films.filter((film) => film.genre === currGenre);
    }
    dispatch(changeFilms({ films: filmsByGenre }));
  }, [currGenre, dispatch, films]);

  const genres = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  const genreComponents = genres.map(
    (genre) => (
      <li key={genre} className={cn('catalog__genres-item', { 'catalog__genres-item--active': genre === currGenre })} >
        <Link to="#" className="catalog__genres-link" onClick={() => dispatch(changeGenre({ genre }))}>{genre}</Link>
      </li>
    ));

  return (
    <ul className="catalog__genres-list">
      {genreComponents}
    </ul >
  );
}
