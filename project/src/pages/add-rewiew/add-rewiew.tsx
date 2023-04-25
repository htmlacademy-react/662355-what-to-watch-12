import { Link } from 'react-router-dom';
import AddComment from '../../components/add-comment/add-comment';
import Logo from '../../components/logo/logo';
import UserIcon from '../../components/user/user';
import { WithFilmProps } from '../../types/film';
import { withFilmLoading } from '../../hocs/with-film-loading';

function AddRewiewScreen({ film }: WithFilmProps): JSX.Element {
  return (
    <section className="film-card film-card--full" style={{ background: film.backgroundColor }}>
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

          <UserIcon />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <AddComment filmId={film.id} />
      </div>

    </ section>
  );
}

export default withFilmLoading(AddRewiewScreen);
