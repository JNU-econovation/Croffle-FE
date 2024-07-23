import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';
import { getPlayList, Music } from '../../api/music';
import musicImg from '@img/musicImg.svg';
import PlayButton from '@img/playButton.svg';

export const PlayListDetailGuest = () => {
  const { currentMusicId, isPlaying, playMusic, stopMusic, updateProgress } =
    useAudio();

  const [fetchedMusicList, setFetchedMusicList] = useState<Music[]>([]);

  const fetchPlayList = async () => {
    try {
      const playList = await getPlayList();
      setFetchedMusicList(playList as unknown as Music[]);
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
  }, [isPlaying, fetchedMusicList]);

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
                  <img src={PlayButton} alt="Play button" />
                </button>
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
