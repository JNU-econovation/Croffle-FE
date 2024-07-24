import { useState } from 'react';

interface MusicProps {
  musicId: number;
  title: string;
  musicUrl: string;
  isPlaying?: boolean;
}

export const useAudio = () => {
  const [currentMusicId, setCurrentMusicId] =
    useState<MusicProps['musicId']>(0);
  const [isPlaying, setIsPlaying] = useState<MusicProps['isPlaying']>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [progress, setProgress] = useState(0);

  const playMusic = (music: MusicProps) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(music.musicUrl);
    newAudio.play();
    setAudio(newAudio);
    setCurrentMusicId(music.musicId);
    setIsPlaying(true);
  };

  const stopMusic = () => {
    if (audio) {
      audio.pause();
      setAudio(null);
    }
    setCurrentMusicId(0);
    setIsPlaying(false);
  };

  const getCurrentMusicProgress = () => {
    if (audio) {
      const currentProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return {
    currentMusicId,
    setCurrentMusicId,
    isPlaying,
    playMusic,
    stopMusic,
    progress,
    setProgress,
    getCurrentMusicProgress,
  };
};
