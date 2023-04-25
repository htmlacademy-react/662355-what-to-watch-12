import { Link, useNavigate } from 'react-router-dom';
import { Film } from '../../types/film';
import { useEffect, useRef } from 'react';

type FilmCardProperty = {
  film: Film;
  onMouseEnter: () => void;
  isPlaying: boolean;
  isReset: boolean;
  onMouseLeave: () => void;
}


export default function FilmCard({ film, onMouseEnter, isPlaying, onMouseLeave, isReset }: FilmCardProperty): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.currentTime = 0;
    }

  }, [isPlaying]);

  const handleClick = () => {
    navigate(`/films/${film.id}`);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleClick}>
      <div className="small-film-card__image">
        {
          isPlaying
            ? <video ref={videoRef} src={film.previewVideoLink} width={280} height={175} poster={film.previewImage} muted />
            : <img src={film.previewImage} alt={film.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
