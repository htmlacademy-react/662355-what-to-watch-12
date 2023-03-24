import { Navigate } from 'react-router-dom';
import { useFilmByParamId } from '../../hooks/use-film-by-param-id';
import { Films } from '../../types/film';
import { fotmatDuration, TypeOfTab } from '../../utils';
import Tabs from '../tabs/tabs';

type DetailsProps = {
  films: Films;
  choosedTab: TypeOfTab;
}

export default function Details({ films, choosedTab }: DetailsProps): JSX.Element {
  const film = useFilmByParamId(films);
  if (!film) {
    return <Navigate to="/" />;
  }

  return (
    <Tabs id={film.id} choosedTabs={choosedTab}>
      <div className="film-card__text film-card__row" >
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{film.director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {film.starring.join(',\n')}
            </span>
          </p>
        </div>

        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{fotmatDuration(film.runTime)}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{film.genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </Tabs>
  );
}
