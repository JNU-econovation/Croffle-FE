import { PageLayout } from '../common/Layout';
import { CreateForm } from './CreateForm';
import { PlayListMember } from './PlayListMember';
import { useMemberQuery } from '../../hooks/Query/useMemberQuery';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

export const CreateMember = () => {
  const navigate = useNavigate();
  const { logOut } = useMemberQuery();
  const handleLogOut = () => {
    logOut();
    navigate('/');
  };
  return (
    <PageLayout>
      <CreateBackground>
        <CreateForm />
        <LogOutButton onClick={handleLogOut}>로그아웃</LogOutButton>
        <PlayListMember />
      </CreateBackground>
    </PageLayout>
  );
};

const CreateBackground = styled.div`
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

const LogOutButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  border-radius: 1rem;
  background: linear-gradient(
    119deg,
    #f7c5e0 0%,
    #f7c5e0 46%,
    #f7c5e0 100%,
    #f7c5e0 100%
  );
`;
