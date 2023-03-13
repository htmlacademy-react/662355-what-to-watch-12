import { FilmList } from '../../components/film-list/film-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserIcon from '../../components/user/user';
import { Films } from '../../types/film';
import { User } from '../../types/user';

type MyListScreenProps = {
  films: Films;
  user: User;
}

export default function MyListScreen({ films, user }: MyListScreenProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserIcon user={user} />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films} />
      </section>

      <Footer />
    </div>
  );

}
