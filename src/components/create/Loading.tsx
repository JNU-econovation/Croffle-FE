import loadingImg from '@img/LoadingImg.svg';
import styled from 'styled-components';

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={loadingImg} />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoadingImg = styled.img`
  width: 30rem;
  height: 30rem;
`;
