import { PlayListDetailGuest } from './PlayListDetailGuest';
import { PageLayout } from '../common/Layout';
import { CreateForm } from './CreateForm';
import styled from 'styled-components';

export const CreateGuest = () => {
  return (
    <PageLayout>
      <CreateBackground>
        <CreateForm />
        <PlayListDetailGuest />
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
