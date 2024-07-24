import styled from 'styled-components';
import { PlayTab } from './PlayTab';
import { CreateController } from './CreateController';
import { CreateImage } from './CreateImage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateForm = () => {
  const [isImageMode, setIsImageMode] = useState(false);
  const handleCreateMode = () => {
    setIsImageMode(!isImageMode);
  };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/');
  };
  return (
    <CreateFormContainer>
      <CreateFormHeader onClick={handleHome}>
        <p>Croffle</p>
      </CreateFormHeader>
      <CreateFormMain>
        <SampleController>
          <FormTitle>
            음악
            <br /> 생성하기
            <FormSubTitle>Music Generation</FormSubTitle>
            <CreateModeControllButton onClick={handleCreateMode}>
              {isImageMode
                ? '직접 선택해 음악 생성하기'
                : '이미지로 음악 생성하기'}
            </CreateModeControllButton>
          </FormTitle>
          <PlayTab musicUrl="" />
        </SampleController>
        {isImageMode ? <CreateImage /> : <CreateController />}
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
  cursor: pointer;
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

const CreateModeControllButton = styled.button`
  width: 10rem;
  height: 2rem;
  border: none;
  border-radius: 1.25rem;
  background: #fff;
  margin-top: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
