import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { addFavoriteFilm } from '../../store/api-action';
import { useState } from 'react';

type PromoButtonsProps = {
  film: Film;
  filmsFavourite: number;
}

export default function PromoButtons({ film, filmsFavourite }: PromoButtonsProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isFavourite, setFavourite] = useState(film.isFavorite);
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

  const handlerClickPlay = () => navigate(`/player/${film.id}`);

  const handlerClickMyList = () => {
    if (isAuth) {
      dispatch(addFavoriteFilm({ filmId: film.id, status: isFavourite ? 0 : 1 }));
      setFavourite((state) => !state);
    } else {
      navigate('/login');
    }
  };

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
        <button className="btn btn--list film-card__button" type="button" onClick={handlerClickMyList}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref={isFavourite ? '#in-list' : '#add'}></use>
          </svg>
          <span>My list</span>
          <span className="film-card__count">{filmsFavourite}</span>
        </button>
        <Link to={isAuth ? `/films/${film.id}/review` : '/login'} className="btn film-card__button">Add review</Link>
      </div>
    </div>);
}

