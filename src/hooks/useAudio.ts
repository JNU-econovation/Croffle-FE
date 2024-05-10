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

  return {
    currentMusicId,
    setCurrentMusicId,
    isPlaying,
    playMusic,
    stopMusic,
  };
};
