import styled from 'styled-components';
import { PageLayout } from '../common/Layout';
import bgImg from '@img/bgImg.png';
import { ProcessButton } from './ProcessButton';
import { GoogleLoginButton } from './GoogleLoginButton';
import { useMemberQuery } from '../../hooks/Query/useMemberQuery';

export const Home = () => {
  const { isMember } = useMemberQuery();

  return (
    <PageLayout>
      <HomeBackground>
        <HomeContainer>
          <HomeTitle>Croffle</HomeTitle>
          <HomeSubtitle>하나뿐인 작업곡을 만들어보세요</HomeSubtitle>
          <ProcessButton isMember={isMember} />
          {!isMember && <GoogleLoginButton />}
        </HomeContainer>
      </HomeBackground>
    </PageLayout>
  );
};

const HomeBackground = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  vertical-align: bottom;
  background-image: url(${bgImg});
  background-size: cover;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const HomeTitle = styled.h1`
  color: #fff;
  font-size: 6.25rem;
  font-style: normal;
  font-weight: 400;
`;

const HomeSubtitle = styled.h2`
  color: #eddfff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  margin-top: 0.75rem;
`;
