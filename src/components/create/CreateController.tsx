import styled from 'styled-components';
import './Create.css';

export const CreateController = () => {
  return (
    <CreateControllerContainer>
      <Controller>
        <ControllerTitle>01</ControllerTitle>
        <ControllerSubtitle>스피드</ControllerSubtitle>
        <MusicSpeedInputContainer>
          <input className="MusicSpeedInput" type="range" min="1" max="100" />
        </MusicSpeedInputContainer>
      </Controller>
      <Controller>
        <ControllerTitle>02</ControllerTitle>
        <ControllerSubtitle>분위기</ControllerSubtitle>
        <MusicMoodButtonContainer>
          <MusicMoodButton>편안한</MusicMoodButton>
          <MusicMoodButton>신나는</MusicMoodButton>
        </MusicMoodButtonContainer>
        <MusicMoodButtonContainer>
          <MusicMoodButton>잔잔한</MusicMoodButton>
          <MusicMoodButton>흥겨운</MusicMoodButton>
        </MusicMoodButtonContainer>
      </Controller>
      <Controller>
        <ControllerTitle>03</ControllerTitle>
        <ControllerSubtitle>장소</ControllerSubtitle>
        <MusicPlaceButtonContainer>
          <MusicPlaceButton>집</MusicPlaceButton>
          <MusicPlaceButton>카페</MusicPlaceButton>
        </MusicPlaceButtonContainer>
        <MusicPlaceButtonContainer>
          <MusicPlaceButton>산책</MusicPlaceButton>
          <MusicPlaceButton>운동</MusicPlaceButton>
        </MusicPlaceButtonContainer>
        <MusicPlaceButtonContainer>
          <MusicPlaceButton>산책</MusicPlaceButton>
          <MusicPlaceButton>운동</MusicPlaceButton>
        </MusicPlaceButtonContainer>
      </Controller>
    </CreateControllerContainer>
  );
};

const CreateControllerContainer = styled.div`
  display: flex;
  margin-left: 8rem;
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
  position: relative;
  top: -1rem;
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

const MusicSpeedInputContainer = styled.div`
  display: flex;
  width: 12rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MusicMoodButtonContainer = styled.div`
  display: flex;
  width: 12rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MusicMoodButton = styled.button`
  padding: 0.4rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  border-radius: 1rem;
  background: linear-gradient(
    120deg,
    #dbbeff -0.41%,
    rgba(212, 210, 255, 0.98) 6.15%,
    rgba(219, 200, 243, 0.76) 35.4%,
    rgba(219, 200, 243, 0.76) 78.69%
  );
`;

const MusicPlaceButtonContainer = styled.div`
  display: flex;
  width: 12rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const MusicPlaceButton = styled.button`
  padding: 0.4rem 1rem;
  font-size: 1rem;
  width: 4rem;
  font-weight: 500;
  color: #ffffff;
  border-radius: 1rem;
  background: linear-gradient(
    120deg,
    #dbbeff -0.41%,
    rgba(212, 210, 255, 0.98) 6.15%,
    rgba(219, 200, 243, 0.76) 35.4%,
    rgba(219, 200, 243, 0.76) 78.69%
  );
`;
