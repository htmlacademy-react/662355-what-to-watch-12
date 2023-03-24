import { Navigate, Outlet } from 'react-router-dom';
import { FilmList } from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PromoButtons from '../../components/promo-buttons/promo-buttons';
import UserIcon from '../../components/user/user';
import { useFilmByParamId } from '../../hooks/use-film-by-param-id';
import { Films } from '../../types/film';
import { User } from '../../types/user';

type FilmScreenProps = {
  user: User;
  films: Films;
}

export default function FilmScreen({ user, films }: FilmScreenProps) {
  const film = useFilmByParamId(films);
  if (!film) {
    return <Navigate to="/" />;
  }

  const sameFilms = films.filter((filmEl) => filmEl.id !== film.id && filmEl.genre === film.genre).slice(0, 4);

  return (
    <>
      <section className="film-card film-card--full">
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
              <img src={film.backgroundImage} alt={film.name} width="218" height="327" />
            </div>

            <Outlet />

          </div>
        </div>
      </section>

      <div className="page-content">
        {
          sameFilms.length !== 0 &&
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmList films={sameFilms} />
          </section>
        }
        <Footer />
      </div>
    </>
  );

}
