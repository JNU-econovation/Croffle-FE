import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';
import './PlayList.css';
import { useEffect, useState } from 'react';
import musicImg from '@img/musicImg.svg';
import { getMyPlayList, Music } from '../../api/music';
import playButton from '@img/playButton.svg';
import stopButton from '@img/stopButton.svg';

export const PlayListDetailMember = () => {
  const { currentMusicId, playMusic, stopMusic, isPlaying, progress } =
    useAudio();
  const [fetchedMusicList, setFetchedMusicList] = useState<Music[]>([]);
  const fetchPlayList = async () => {
    try {
      const playList = await getMyPlayList();
      setFetchedMusicList(playList as unknown as Music[]);
    } catch (error) {
      console.error('Failed to fetch playlist', error);
    }
  };

  useEffect(() => {
    fetchPlayList();
  }, []);

  return (
    <PlayListDetailContainer>
      <PlayListContainer>
        <AnimatePresence>
          {fetchedMusicList.map((music) => (
            <motion.div
              key={music.musicId}
              className="musicContainer"
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <MusicImg src={musicImg} />
              <MusicTitle>{music.title}</MusicTitle>
              <MusicPlayButton>
                <button
                  onClick={
                    currentMusicId === music.musicId
                      ? stopMusic
                      : () => playMusic(music)
                  }
                >
                  <img
                    src={
                      currentMusicId === music.musicId && isPlaying
                        ? playButton
                        : stopButton
                    }
                    alt="Play button"
                  />
                </button>
              </MusicPlayButton>
              <ProgressBar>
                <Progress style={{ width: `${progress}%` }}></Progress>
              </ProgressBar>
            </motion.div>
          ))}
        </AnimatePresence>
      </PlayListContainer>
    </PlayListDetailContainer>
  );
};

const PlayListDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
`;

const MusicImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-left: 0.5rem;
`;

const MusicTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 5rem;
  margin-left: 1rem;
  font-size: 1.2rem;
`;

const MusicPlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  position: relative;
  img {
    width: 2rem;
    height: 2rem;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #e0e0e0;
  margin-top: 1rem;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #3d1655;
`;
