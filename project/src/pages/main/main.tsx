import { FilmList } from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genre-list/genre-list';
import Logo from '../../components/logo/logo';
import Promo from '../../components/promo/promo';
import UserIcon from '../../components/user/user';
import { useAppSelector } from '../../hooks';
import { Films } from '../../types/film';
import { User } from '../../types/user';


type MainProps = {
  films: Films;
  user: User;
}

export default function MainScreen({ films, user }: MainProps): JSX.Element {
  const filmsByGenre = useAppSelector((state) => state.films);

  return (
    <>
      <section className="film-card">
        < div className="film-card__bg" >
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div >

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserIcon user={user} />
        </header>

        <Promo film={films[0]} filmsFavourite={films.filter((film) => film.isFavorite).length} />
      </section >

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList films={films} />

          <FilmList films={filmsByGenre} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>);
}
