import styled from 'styled-components';
import { PlayTab } from './PlayTab';
import { CreateController } from './CreateController';

export const CreateForm = () => {
  return (
    <CreateFormContainer>
      <CreateFormHeader>
        <p>Croffle</p>
      </CreateFormHeader>
      <CreateFormMain>
        <SampleController>
          <FormTitle>
            음악
            <br /> 생성하기
            <FormSubTitle>Music Generation</FormSubTitle>
          </FormTitle>
          <PlayTab />
        </SampleController>
        <CreateController />
      </CreateFormMain>
    </CreateFormContainer>
  );
};

const CreateFormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  flex-direction: row;
`;

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
`;

const CreateFormMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SampleController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const FormTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
  letter-spacing: 0.125rem;
  text-transform: capitalize;
`;

const FormSubTitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #000;
  letter-spacing: 0.125rem;
  text-transform: capitalize;
`;
