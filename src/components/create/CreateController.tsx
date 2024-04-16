import styled from 'styled-components';

export const CreateController = () => {
  return (
    <CreateControllerContainer>
      <Controller>
        <ControllerTitle>01</ControllerTitle>
        <ControllerSubtitle>스피드</ControllerSubtitle>
      </Controller>
      <Controller>
        <ControllerTitle>02</ControllerTitle>
        <ControllerSubtitle>분위기</ControllerSubtitle>
      </Controller>
      <Controller>
        <ControllerTitle>03</ControllerTitle>
        <ControllerSubtitle>장소</ControllerSubtitle>
      </Controller>
    </CreateControllerContainer>
  );
};

const CreateControllerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Controller = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 16rem;
  margin: 2rem;
  border-radius: 0.875rem;
  border: 1px solid #e2d2fe;
  background: #fff;
  box-shadow: -2px 5px 13px 2px rgba(0, 0, 0, 0.25);
`;

const ControllerTitle = styled.p`
  color: #513d6c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: capitalize;
`;

const ControllerSubtitle = styled.p`
  color: #513d6c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
  font-weight: 300;
  text-transform: capitalize;
`;
