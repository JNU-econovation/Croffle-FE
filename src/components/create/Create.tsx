import { PageLayout } from '../common/Layout';
import { CreateForm } from './CreateForm';
import styled from 'styled-components';
import { PlayList } from './PlayList';

export const Create = () => {
  return (
    <PageLayout>
      <CreateBackground>
        <CreateForm />
        <PlayList />
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
