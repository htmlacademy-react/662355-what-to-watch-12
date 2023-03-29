import { useState } from 'react';
import { Film, Films } from '../../types/film';
import FilmCard from '../film/film';
import ShowMoreButton from '../show-more-button/show-more-button';
import { FILMS_COUNT_STEP } from '../../const';


type FilmListProps = { films: Films };

export function FilmList({ films }: FilmListProps): JSX.Element {
  const [filmId, setFilmId] = useState(-1);
  const [flimsCount, setFilmsCount] = useState(FILMS_COUNT_STEP);

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
    <>
      <div className="catalog__films-list">
        {films.slice(0, flimsCount).map((film) => createFilmCard(film))}
      </div>
      {flimsCount < films.length && <ShowMoreButton onClick={() => { setFilmsCount((count) => count + FILMS_COUNT_STEP); }} />}
    </>
  );
}
