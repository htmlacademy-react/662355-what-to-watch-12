import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type FilmCardProperty = {
  film: Film;
  onMouseEnter: () => void;
  isPlaying: boolean;
  isReset: boolean;
  onMouseLeave: () => void;
}


export default function FilmCard({ film, onMouseEnter, isPlaying, onMouseLeave, isReset }: FilmCardProperty): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="small-film-card__image">
        {
          isReset ? <img src={film.previewImage} alt={film.name} width="280" height="175" />
            :
            < VideoPlayer
              src={film.previewVideoLink}
              isPlaying={isPlaying}
              width={280}
              height={175}
              muted
              poster={film.previewImage}
              isReset={isReset}
            />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>

  );
}
