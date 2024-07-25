import styled from 'styled-components';
import { PageLayout } from '../common/Layout';
import { useAudio } from '../../hooks/useAudio';
import musicImg from '@img/musicImg.svg';
import LikeBefore from '@img/LikeBefore.svg';
import LikeAfter from '@img/LikeAfter.svg';
import PlayButton from '@img/playButton.svg';
import stopButton from '@img/stopButton.svg';
import { postMusicLike } from '../../api/music';
import { usePlayListQuery } from '../../hooks/Query/usePlayListQuery';
import { useNavigate } from 'react-router-dom';
import './PlayList.css';

interface CreateLikeProps {
  musicId: number;
  isMember: boolean;
}

export const CreateLike = () => {
  const { currentMusicId, playMusic, stopMusic, isPlaying } = useAudio();
  const { popularPlayList, playList } = usePlayListQuery();

  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };

  const handleMusicLike = async ({ musicId, isMember }: CreateLikeProps) => {
    try {
      await postMusicLike({ musicId });
      alert('해당 음악에 좋아요 표시를 했습니다.');
    } catch (error) {
      if (!isMember) {
        alert('로그인이 필요한 서비스입니다.');
        return;
      } else {
        alert('이미 좋아요를 누른 음악입니다.');
      }
    }
  };

  return (
    <PageLayout>
      <CreateBackground>
        <CreateFormHeader onClick={handleHome}>
          <p>Croffle</p>
        </CreateFormHeader>
        <PlayListContainer>
          <div className="Column-box">
            <PlayListTitle>실시간 생성 중!</PlayListTitle>
            <PlayListWrapper>
              <PlayList>
                실시간 생성중!
                {Array.isArray(playList) &&
                  playList.map((music) => (
                    <div key={music.musicId} className="musicContainer2">
                      <MusicImg src={musicImg} />
                      <MusicTitle>{music.title}</MusicTitle>
                      <MusicLike>
                        <button onClick={() => handleMusicLike(music.musicId)}>
                          {music.pressed ? (
                            <img src={LikeAfter} alt="Like button" />
                          ) : (
                            <img src={LikeBefore} alt="Like button" />
                          )}
                        </button>
                        <p>{music.like}</p>
                      </MusicLike>
                      <MusicPlayButton>
                        <button
                          onClick={
                            currentMusicId === music.musicId
                              ? stopMusic
                              : () => playMusic(music)
                          }
                        >
                          {currentMusicId === music.musicId && isPlaying ? (
                            <img src={PlayButton} alt="Play button" />
                          ) : (
                            <img src={stopButton} alt="Stop button" />
                          )}
                        </button>
                      </MusicPlayButton>
                    </div>
                  ))}
              </PlayList>
            </PlayListWrapper>
          </div>
          <div className="column-box">
            <PlayListTitle>이번주 인기음악</PlayListTitle>
            <PlayListWrapper>
              <PopularPlayList>
                {Array.isArray(popularPlayList) &&
                  popularPlayList.map((music) => (
                    <div key={music.musicId} className="musicContainer2">
                      <MusicImg src={musicImg} />
                      <MusicTitle>{music.title}</MusicTitle>
                      <MusicLike>
                        <button onClick={() => handleMusicLike(music.musicId)}>
                          {music.pressed ? (
                            <img src={LikeAfter} alt="Like button" />
                          ) : (
                            <img src={LikeBefore} alt="Like button" />
                          )}
                        </button>
                        <p>{music.like}</p>
                      </MusicLike>
                      <MusicPlayButton>
                        <button
                          onClick={
                            currentMusicId === music.musicId
                              ? stopMusic
                              : () => playMusic(music)
                          }
                        >
                          {currentMusicId === music.musicId && isPlaying ? (
                            <img src={PlayButton} alt="Play button" />
                          ) : (
                            <img src={stopButton} alt="Stop button" />
                          )}
                        </button>
                      </MusicPlayButton>
                    </div>
                  ))}
              </PopularPlayList>
            </PlayListWrapper>
          </div>
        </PlayListContainer>
      </CreateBackground>
    </PageLayout>
  );
};

const CreateFormHeader = styled.div`
  position: absolute;
  left: 0;
  margin: 5rem 0 0 4rem;
  p {
    font-size: 2rem;
    font-weight: 300;
    color: #000;
    letter-spacing: 0.125rem;
    text-transform: capitalize;
  }
  cursor: pointer;
`;

const CreateBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  background: linear-gradient(
    119deg,
    #fff 0%,
    #dfd0ff 46%,
    #faf7ff 100%,
    #cc46b7 100%
  );
  background-size: cover;
`;

const PlayListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PlayListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 2rem 2rem;
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
  font-size: 1rem;
`;

const MusicLike = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
  p {
    font-size: 1rem;
    margin-left: 0.5rem;
  }
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

const PopularPlayList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 21rem;
`;

const PlayList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
`;

const PlayListTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;
