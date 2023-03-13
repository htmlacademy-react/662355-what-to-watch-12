import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';

type PromoButtonsProos = {
  film: Film;
  filmsFavourite: number;
  isShowAddReview?: boolean;
}

export default function PromoButtons({ film, filmsFavourite, isShowAddReview = false }: PromoButtonsProos): JSX.Element {
  const navigate = useNavigate();
  const handlerClickPlay = () => navigate(`/player/${film.id}`);
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{film.name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{film.genre}</span>
        <span className="film-card__year">{film.released}</span>
      </p>

      <div className="film-card__buttons">
        <button className="btn btn--play film-card__button" type="button" onClick={handlerClickPlay}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button className="btn btn--list film-card__button" type="button">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">{filmsFavourite}</span>
        </button>
        {isShowAddReview ? <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link> : ''}
      </div>
    </div>);
}
