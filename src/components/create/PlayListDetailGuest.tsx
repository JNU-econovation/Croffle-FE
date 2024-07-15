import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';
import { getPlayList, Music } from '../../api/music';
import musicImg from '../../../src/assets/musicImg.svg';
import LikeBefore from '../../assets/LikeBefore.svg';
// import LikeAfter from '../../../src/assets/likeAfter.svg';

export const PlayListDetailGuest = () => {
  const {
    currentMusicId,
    isPlaying,
    playMusic,
    stopMusic,
    progress,
    updateProgress,
  } = useAudio();

  const [fetchedMusicList, setFetchedMusicList] = useState<Music[]>([]);

  const fetchPlayList = async () => {
    try {
      const playList = await getPlayList();
      setFetchedMusicList(playList);
    } catch (error) {
      console.error('Failed to fetch playlist', error);
    }
  };

  useEffect(() => {
    fetchPlayList();
    if (isPlaying) {
      const intervalId = setInterval(updateProgress, 1000);
      return () => clearInterval(intervalId);
    }
  }, [progress, isPlaying]);

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
              <div>
                <img src={LikeBefore} alt="Like button" />
                {music.like} 개
              </div>
              <MusicPlayButton>
                <button
                  onClick={
                    currentMusicId === music.musicId
                      ? stopMusic
                      : () => playMusic(music)
                  }
                >
                  <img
                    src="../../../src/assets/playButton.svg"
                    alt="Play button"
                  />
                </button>
                <DonutContainer>
                  <svg width="50" height="50" viewBox="0 0 50 50">
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke="#e6e6e6"
                      strokeWidth="5"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      stroke="#7b42f6"
                      strokeWidth="5"
                      strokeDasharray="125.6"
                      strokeDashoffset={125.6 - (progress / 100) * 125.6}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.3s' }}
                    />
                  </svg>
                  <ProgressText>{progress.toFixed(2)}%</ProgressText>
                </DonutContainer>
              </MusicPlayButton>
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
  width: 10rem;
  height: 5rem;
  margin: 0.75rem 0 0 1.5rem;
  font-size: 1.2rem;
`;

const MusicPlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8rem;
  width: 5rem;
  height: 5rem;
  position: relative;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

const DonutContainer = styled.div`
  top: 0;
  left: 0;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressText = styled.div`
  position: absolute;
  font-size: 0.875rem;
  color: #7b42f6;
`;
