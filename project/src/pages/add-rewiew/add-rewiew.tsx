import { Link, Navigate, useParams } from 'react-router-dom';
import AddComment from '../../components/add-comment/add-comment';
import Logo from '../../components/logo/logo';
import UserIcon from '../../components/user/user';
import { Film, Films } from '../../types/film';
import { User } from '../../types/user';

type AddRewiewScreenProps = {
  films: Films;
  user: User;
};

export default function AddRewiewScreen({ films, user }: AddRewiewScreenProps): JSX.Element {
  const { id } = useParams();
  let film: Film | undefined;
  if (id) {
    film = films.find((filmElem) => filmElem.id === +id);
  }

  if (!id || !film) {
    return <Navigate to="/" />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <UserIcon user={user} />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddComment />
      </div>

    </section>
  );

}
