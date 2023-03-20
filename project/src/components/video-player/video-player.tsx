import { useEffect, useRef } from 'react';

type VideoPlayerProps = {
  src: string;
  isPlaying?: boolean;
  width: number;
  height: number;
  muted: boolean;
  poster: string;
  isReset?: boolean;
}

export default function VideoPlayer({ src, isPlaying = false, width, height, muted, poster, isReset = false }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    if (isReset) {
      videoRef.current.currentTime = 0;
    }
  }, [isPlaying, isReset]);
  return (
    <video ref={videoRef} src={src} width={width} height={height} muted={muted} poster={poster} />
  );
}

