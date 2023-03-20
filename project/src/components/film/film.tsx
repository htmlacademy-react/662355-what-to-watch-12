import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type FilmCardProperty = {
  film: Film;
  onMouseOver: () => void;
}


export default function FilmCard({ film, onMouseOver }: FilmCardProperty): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseOver={onMouseOver}>
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>

  );
}
