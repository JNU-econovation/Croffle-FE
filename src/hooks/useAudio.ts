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
  //음악의 총 길이에서 얼마나 진행되었는지를 나타내는 변수
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

  const updateProgress = () => {
    const audio = document.getElementById('audio') as HTMLAudioElement;
    const progress = (audio.currentTime / audio.duration) * 100;
    setProgress(progress);
  };

  return {
    currentMusicId,
    setCurrentMusicId,
    isPlaying,
    playMusic,
    stopMusic,
    progress,
    updateProgress,
  };
};
