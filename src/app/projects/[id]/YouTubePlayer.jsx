"use client";
import YouTube from 'react-youtube';

export default function YouTubePlayer({ videoId }) {
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 0,
      mute: 1,
      controls: 1,
      loop: 1,
      disablekb: 0,
      iv_load_policy: 3,
    },
  };
  return <YouTube videoId={videoId} opts={opts} />;
} 