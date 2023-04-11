import { useNavigate } from 'react-router-dom';
import { WithFilmProps } from '../../types/film';
import { withFilmLoading } from '../../components/hocs/with-film-loading';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import PlayButton from '../../components/play-button/play-button';
import { formatPlayerTime } from '../../utils';

function PlayerScreen({ film }: WithFilmProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const onClickPlay = () => {
    setPlaying((state) => !state);
  };

  const onClickFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const onChangeDuration = (evt: ChangeEvent<HTMLVideoElement>) => {
    setDuration(evt.target.duration);
  };

  const onTimeUpdate = (evt: ChangeEvent<HTMLVideoElement>) => {
    setCurrentTime(evt.target.currentTime);
  };

  return (
    <div className="player">
      <video
        className='player__video'
        ref={videoRef}
        src={film.videoLink}
        poster={film.backgroundImage}
        onDurationChange={onChangeDuration}
        onTimeUpdate={onTimeUpdate}
      />

      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTime} max={duration}></progress>
            <div className="player__toggler" style={{ left: `${Math.round(currentTime / duration * 100)}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{formatPlayerTime(duration - currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <PlayButton isPlaying={isPlaying} onClick={onClickPlay} />
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onClickFullscreen}>
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

export default withFilmLoading(PlayerScreen);
