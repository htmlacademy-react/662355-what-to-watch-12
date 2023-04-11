type PlayButtonProps = {
  isPlaying: boolean;
  onClick: () => void;
}

export default function PlayButton({ isPlaying, onClick }: PlayButtonProps): JSX.Element {
  return (
    <button type="button" className="player__play" onClick={onClick}>
      {isPlaying ?
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
        :
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </>}
    </button>
  );
}
