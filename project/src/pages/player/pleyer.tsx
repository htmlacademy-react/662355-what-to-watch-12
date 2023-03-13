import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Films } from '../../types/film';

type PlayerScreenProps = { films: Films };

export default function PlayerScreen({ films }: PlayerScreenProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    return <Navigate to="/" />;
  }
  const film = films.find((filmElem) => filmElem.id === +id);
  if (!film) {
    return <Navigate to="/" />;
  }
  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.posterImage}></video>

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: 30 }}>Toggler</div>
          </div>
          <div className="player__time-value">{film.runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div >
  );

}
