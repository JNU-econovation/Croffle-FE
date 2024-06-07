import { useState } from 'react';
import {
  getPlayList,
  postGenerateMusic,
  PostGenerateMusicReq,
} from '../api/music';
import { Music } from '../api/music';

export interface PromptProps {
  speed: number;
  mood: string;
  place: string;
}

export interface GenerateStepProps {
  onStep: boolean;
}

export const useGenerate = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [speed, setSpeed] = useState<PromptProps['speed']>(0);
  const [mood, setMood] = useState<PromptProps['mood']>('');
  const [place, setPlace] = useState<PromptProps['place']>('');

  const fetchPlayList = async () => {
    const response = await getPlayList();
    setMusics(response.music);
  };

  const generateMusic = async ({ speed, mood, place }: PromptProps) => {
    const prompt: PostGenerateMusicReq = {
      prompt: `속도가 ${speed}%로 빠른 분위기가 ${mood}인 장소가 ${place}인 음악`,
    };
    if (speed === 0 || mood === '' || place === '')
      return alert('모든 항목을 입력해주세요');
    await postGenerateMusic(prompt);
    fetchPlayList();
  };

  return {
    promptState: { speed, mood, place },
    setPromptState: { setSpeed, setMood, setPlace },
    musicsState: { musics },
    fetchPlayList,
    generateMusic,
  };
};
