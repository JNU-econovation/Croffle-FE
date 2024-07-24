import { PageLayout } from '../common/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const CreateEnd = () => {
  const navigate = useNavigate();
  const onMovePlayList = () => {
    navigate(-1);
  };
  const onMovePlayListLike = () => {
    navigate('/createLike');
  };
  return (
    <PageLayout>
      <CreateEndContainer>
        <CreateHeader>
          <MovePlayListButton onClick={onMovePlayList}>
            또 만들고 싶어요
          </MovePlayListButton>
          <MovePlayListLikeButton onClick={onMovePlayListLike}>
            다른 사람이 만든 음악도 들어볼래요
          </MovePlayListLikeButton>
        </CreateHeader>
      </CreateEndContainer>
    </PageLayout>
  );
};

const CreateEndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CreateHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const MovePlayListButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin-left: 2rem;
`;

const MovePlayListLikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  margin-right: 2rem;
`;
