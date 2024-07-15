import { useState } from 'react';
import {
  getPlayList,
  postGenerateMusic,
  PostGenerateMusicReq,
  postMemberGenerateMusic,
} from '../api/music';
import { Music } from '../api/music';

export interface PromptProps {
  speed: number;
  mood: string;
  place: string;
  strPrompt: string;
}

export interface GenerateStepProps {
  onStep: boolean;
}

export const useGenerate = () => {
  const [musics, setMusics] = useState<Music[]>([]);
  const [speed, setSpeed] = useState<PromptProps['speed']>(0);
  const [mood, setMood] = useState<PromptProps['mood']>('');
  const [place, setPlace] = useState<PromptProps['place']>('');
  const [strPrompt, setStrPrompt] = useState<PromptProps['strPrompt']>('');
  const [onNextStep, setOnNextStep] =
    useState<GenerateStepProps['onStep']>(false);

  const fetchPlayList = async () => {
    const response = await getPlayList();
    setMusics(response.music);
  };

  const generateMusic = async ({
    speed,
    mood,
    place,
    strPrompt,
  }: PromptProps) => {
    const prompt: PostGenerateMusicReq = {
      prompt1: `속도가 ${speed}%로 빠른 분위기가 ${mood}인 장소가 ${place}인 음악`,
      prompt2: `${strPrompt}`,
    };
    if (speed === 0 || mood === '' || place === '')
      return alert('모든 항목을 입력해주세요');
    await postGenerateMusic(prompt);
    fetchPlayList();
  };

  const generateMemberMusic = async ({
    speed,
    mood,
    place,
    strPrompt,
  }: PromptProps) => {
    const prompt: PostGenerateMusicReq = {
      prompt1: `속도가 ${speed}%로 빠른 분위기가 ${mood}인 장소가 ${place}인 음악`,
      prompt2: `${strPrompt}`,
    };
    if (speed === 0 || mood === '' || place === '')
      return alert('모든 항목을 입력해주세요');
    await postMemberGenerateMusic(prompt);
    fetchPlayList();
  };

  const readyOnNextStep = ({ speed, mood, place }: PromptProps) => {
    if (speed === 0 || mood === '' || place === '') return;
    setOnNextStep(true);
  };

  return {
    promptState: { speed, mood, place, strPrompt },
    setPromptState: { setSpeed, setMood, setPlace, setStrPrompt },
    musicsState: { musics },
    stepState: { onNextStep, readyOnNextStep },
    fetchPlayList,
    generateMusic,
    generateMemberMusic,
  };
};
