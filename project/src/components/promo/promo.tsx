import { memo } from 'react';
import { Film } from '../../types/film';
import Logo from '../logo/logo';
import PromoButtons from '../promo-buttons/promo-buttons';
import UserIcon from '../user/user';

type PromoProps = {
  film: Film;
  filmsFavourite: number;
}

function Promo({ film, filmsFavourite }: PromoProps): JSX.Element {
  return (

    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div >

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <UserIcon />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
          <PromoButtons film={film} filmsFavourite={filmsFavourite} />
        </div>
      </div>
    </section >);
}

export default memo(Promo);
