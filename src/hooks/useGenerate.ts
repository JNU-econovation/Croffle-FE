import { useState } from 'react';
import {
  getPlayList,
  postGenerateMusic,
  PostGenerateMusicReq,
  postMemberGenerateMusic,
} from '../api/music';
import { Music } from '../api/music';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [musics, setMusics] = useState<Music[]>([]);
  const [speed, setSpeed] = useState<PromptProps['speed']>(0);
  const [mood, setMood] = useState<PromptProps['mood']>('');
  const [place, setPlace] = useState<PromptProps['place']>('');
  const [strPrompt, setStrPrompt] = useState<PromptProps['strPrompt']>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [onNextStep, setOnNextStep] =
    useState<GenerateStepProps['onStep']>(false);

  const fetchPlayList = async () => {
    const response = await getPlayList();
    setMusics(response as unknown as Music[]);
  };

  const generateMusic = async ({
    speed,
    mood,
    place,
    strPrompt,
  }: PromptProps) => {
    const prompt: PostGenerateMusicReq = {
      prompt1: `속도가 ${speed}%로 분위기가 ${mood} 장소가 ${place}인 음악`,
      prompt2: `${strPrompt}`,
    };
    if (speed === 0 || mood === '' || place === '')
      return alert('모든 항목을 입력해주세요');
    setIsLoading(true);
    const response = await postGenerateMusic(prompt);
    const musicUrl = response.response.musicUrl;
    localStorage.setItem('currentMusicUrl', musicUrl);
    fetchPlayList();
    navigate('/createEnd');
  };

  const setMusicUrlLocalStorage = (musicUrl: string) => {
    localStorage.setItem('currentMusicUrl', musicUrl);
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
    setIsLoading(true);
    const response = await postMemberGenerateMusic(prompt);
    const musicUrl = response.response.musicUrl;
    setMusicUrlLocalStorage(musicUrl);
    fetchPlayList();
    navigate('/createEnd');
  };

  const readyOnNextStep = ({ speed, mood, place }: PromptProps) => {
    if (speed === 0 || mood === '' || place === '') return;
    setOnNextStep(true);
  };

  return {
    isLoading,
    promptState: { speed, mood, place, strPrompt },
    setPromptState: { setSpeed, setMood, setPlace, setStrPrompt },
    musicsState: { musics },
    stepState: { onNextStep, readyOnNextStep },
    fetchPlayList,
    generateMusic,
    generateMemberMusic,
  };
};
