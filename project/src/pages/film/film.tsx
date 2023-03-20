import { Navigate, useParams } from 'react-router-dom';
import { FilmList } from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import PromoButtons from '../../components/promo-buttons/promo-buttons';
import UserIcon from '../../components/user/user';
import { Films, Film } from '../../types/film';
import { User } from '../../types/user';

type FilmScreenProps = {
  user: User;
  films: Films;
}

export default function FilmScreen({ user, films }: FilmScreenProps) {
  const { id } = useParams();
  let filmChoosen: Film | undefined;
  if (id) {
    filmChoosen = films.find((filmElem) => filmElem.id === +id);
  }

  if (!id || !filmChoosen) {
    return <Navigate to="/" />;
  }
  function convertRating(rating: number): string {
    if (rating <= 3) {
      return 'Bad';
    }
    else if (rating <= 5) {
      return 'Normal';
    }
    else if (rating <= 8) {
      return 'Good';
    }
    else if (rating < 10) {
      return 'Very Good';
    }
    else {
      return 'Awesome';
    }
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmChoosen.backgroundImage} alt={filmChoosen.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserIcon user={user} />
          </header>
          <div className="film-card__wrap">
            <PromoButtons film={filmChoosen} filmsFavourite={films.filter((film) => film.isFavorite).length} isShowAddReview />
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmChoosen.backgroundImage} alt={filmChoosen.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{filmChoosen.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{convertRating(filmChoosen.rating)}</span>
                  <span className="film-rating__count">{filmChoosen.scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{filmChoosen.description}</p>
                <p className="film-card__director"><strong>Director: {filmChoosen.director}</strong></p>

                <p className="film-card__starring"><strong>Starring: {filmChoosen.starring}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={films.slice(0, 4)} />
        </section>

        <Footer />
      </div>
    </>
  );

}
