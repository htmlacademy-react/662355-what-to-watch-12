import { Outlet, useLocation, useParams, } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PromoButtons from '../../components/promo-buttons/promo-buttons';
import SameFilms from '../../components/same-films/same-films';
import Tabs from '../../components/tabs/tabs';
import UserIcon from '../../components/user/user';
import { WithFilmProps } from '../../types/film';
import { TypeOfTab } from '../../const';
import { useEffect } from 'react';
import { withFilmLoading } from '../../hocs/with-film-loading';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews, fetchSimilarFilms } from '../../store/api-action';
import { getReviews, getSimilarFilms } from '../../store/film-porcess/selectors';
import { getFavoriteFilms } from '../../store/app-process/selectors';

function FilmScreen({ film }: WithFilmProps) {
  const location = useLocation();
  const reviews = useAppSelector(getReviews);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const similarFilms = useAppSelector(getSimilarFilms);
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  useEffect(() => {
    if (id) {
      const filmId = parseInt(id, 10);
      dispatch(fetchSimilarFilms(filmId));
      dispatch(fetchReviews(filmId));
    }
  }, [id]);

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

            <UserIcon />
          </header>
          <div className="film-card__wrap">
            <PromoButtons film={film} filmsFavourite={favoriteFilms.length} />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <Tabs id={film.id} choosedTabs={getType(location.pathname)}>
              <Outlet context={{ film, reviews }} />
            </Tabs>

          </div>
        </div>
      </section>

      <div className="page-content">
        <SameFilms films={similarFilms} />
        <Footer />
      </div>
    </>
  );
}

export default withFilmLoading(FilmScreen);
