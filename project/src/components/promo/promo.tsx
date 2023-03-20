import { Film } from '../../types/film';
import PromoButtons from '../promo-buttons/promo-buttons';

type PromoProps = {
  film: Film;
  filmsFavourite: number;
}

export default function Promo({ film, filmsFavourite }: PromoProps): JSX.Element {
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
        <PromoButtons film={film} filmsFavourite={filmsFavourite}/>
      </div>
    </div>);

}

