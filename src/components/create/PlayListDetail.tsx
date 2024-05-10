import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { MUSICS } from '../../api/musics';
import { useAudio } from '../../hooks/useAudio';
import './PlayList.css';

export const PlayListDetail = () => {
  const { currentMusicId, setCurrentMusicId, isPlaying, playMusic, stopMusic } =
    useAudio();

  const togglePlay = () => {
    if (currentMusicId === 0) {
      setCurrentMusicId(1);
    } else {
      setCurrentMusicId(0);
    }
  };

  return (
    <PlayListDetailContainer>
      <PlayListContainer>
        <AnimatePresence>
          {MUSICS.map((music) => (
            <motion.div
              key={music.musicId}
              className="musicContainer"
              initial={{ opacity: 0.8, scale: 0.8 }}
              animate={{}}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <MusicImg src={music.img} />
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
                    src="../../../src/assets/playButton.svg"
                    alt="Play button"
                  />
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
  img {
    width: 3rem;
    height: 3rem;
  }
`;
