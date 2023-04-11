import { Navigate, Outlet, useLocation, } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PromoButtons from '../../components/promo-buttons/promo-buttons';
import SameFilms from '../../components/same-films/same-films';
import Tabs from '../../components/tabs/tabs';
import UserIcon from '../../components/user/user';
import { useFilmByParamId } from '../../hooks';
import { Films } from '../../types/film';
import { User } from '../../types/user';
import { TypeOfTab } from '../../const';

type FilmScreenProps = {
  user: User;
  films: Films;
}

export default function FilmScreen({ user, films }: FilmScreenProps) {
  const location = useLocation();
  const film = useFilmByParamId(films);
  if (!film) {
    return <Navigate to="/" />;
  }

  const sameFilms = films.filter((filmEl) => filmEl.id !== film.id && filmEl.genre === film.genre).slice(0, 4);

  function getType(pathname: string): TypeOfTab {
    const tab = pathname.slice(pathname.lastIndexOf('/') + 1, pathname.length);
    switch (tab) {
      case TypeOfTab.DETAILS:
      case TypeOfTab.REVIEWS:
        return tab;
      default:
        return TypeOfTab.OVERVIEW;
    }

  }

  return (
    <>
      <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserIcon user={user} />
          </header>
          <div className="film-card__wrap">
            <PromoButtons film={film} filmsFavourite={films.filter((filmElem) => filmElem.isFavorite).length} isShowAddReview />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <Tabs id={film.id} choosedTabs={getType(location.pathname)}>
              <Outlet />
            </Tabs>

          </div>
        </div>
      </section>

      <div className="page-content">
        <SameFilms films={sameFilms} />
        <Footer />
      </div>
    </>
  );

}
