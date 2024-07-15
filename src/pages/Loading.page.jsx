import { Loading } from '../components/Loading/Loading.jsx';
import styled from 'styled-components';

export const LoadingPage = () => {
  return (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
