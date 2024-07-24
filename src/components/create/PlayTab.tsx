import styled from 'styled-components';
import record from '@img/record.svg';
import playIcon from '@img/playIcon.svg';
import { useState } from 'react';

interface PlayTabProps {
  musicUrl: string;
}

export const PlayTab = ({ musicUrl }: PlayTabProps) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playBgm = () => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(musicUrl);
    newAudio.play();
    setAudio(newAudio);
    console.log(musicUrl);
  };

  return (
    <PlayTabContainer>
      <TabImg src={record} alt="tab-img" />
      <PlayBgmButton onClick={() => playBgm()}>
        <PlayIcon src={playIcon} alt="playIcon" />
      </PlayBgmButton>
    </PlayTabContainer>
  );
};

const PlayTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12rem 0 0 4rem;
`;

const TabImg = styled.img`
  width: 20rem;
  height: 100%;
`;

const PlayBgmButton = styled.button`
  position: relative;
  margin-top: -3rem;
  width: 5em;
  height: 5rem;
  background-color: #3d1655;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

const PlayIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-top: 1rem;
`;
