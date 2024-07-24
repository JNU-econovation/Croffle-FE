import { PageLayout } from '../common/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PlayTab } from './PlayTab';

export const CreateEnd = () => {
  const navigate = useNavigate();
  const findUrl = () => {
    if (localStorage.getItem('currentMusicUrl')) {
      console.log(localStorage.getItem('currentMusicUrl'));
      return localStorage.getItem('currentMusicUrl') as string;
    } else {
      return '';
    }
  };
  const savedUrl = findUrl();

  const onMovePlayList = () => {
    navigate(-1);
  };
  const onMovePlayListLike = () => {
    navigate('/createLike');
  };
  const onHome = () => {
    navigate('/');
  };
  return (
    <PageLayout>
      <CreateHeader onClick={onHome}>
        <p>Croffle</p>
      </CreateHeader>
      <CreateEndBackground>
        <CreateEndContainer>
          <PlayTab musicUrl={savedUrl} />
          <Script>음악이 완성되었어요!</Script>
          <Script>한번 들어볼까요?</Script>
          <MoveButtonContainer>
            <MovePlayListButton onClick={onMovePlayList}>
              또 만들고 싶어요
            </MovePlayListButton>
            <MovePlayListLikeButton onClick={onMovePlayListLike}>
              다른 사람이 만든 음악도 들어볼래요
            </MovePlayListLikeButton>
          </MoveButtonContainer>
        </CreateEndContainer>
      </CreateEndBackground>
    </PageLayout>
  );
};

const CreateEndBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const CreateHeader = styled.div`
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

const CreateEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Script = styled.p`
  font-size: 2rem;
  font-weight: 300;
  color: #000;
  text-transform: capitalize;
  margin: 1rem 0;
`;

const MoveButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const MovePlayListButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 2rem;
  border: none;
  border-radius: 1.25rem;
  background: #fff;
  margin-top: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const MovePlayListLikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
  height: 2rem;
  border: none;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
