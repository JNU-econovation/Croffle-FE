import styled from 'styled-components';
import './Create.css';
import { PromptProps, useGenerate } from '../../hooks/useGenerate';
import { motion } from 'framer-motion';
import playIcon2 from '../../assets/playIcon2.svg';

export const CreateController = () => {
  const { promptState, setPromptState } = useGenerate();
  const { speed, mood, place } = promptState;
  const { setSpeed, setMood, setPlace } = setPromptState;
  const { generateMusic } = useGenerate();
  const { generateMemberMusic } = useGenerate();

  const handleSpeedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSpeed(Number(value));
  };
  const handleMoodButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setMood(value);
  };

  const handlePlaceButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setPlace(value);
  };

  const handleGenerateMusic = async ({
    speed,
    mood,
    place,
    strPrompt,
  }: PromptProps) => {
    if (localStorage.getItem('accessToken')) {
      generateMemberMusic({ speed, mood, place, strPrompt });
    } else {
      generateMusic({ speed, mood, place, strPrompt });
    }
  };

  return (
    <CreateControllerContainer>
      <motion.div className="Controller" whileHover={{ scale: 1.3 }}>
        <ControllerTitle>01</ControllerTitle>
        <ControllerSubtitle>스피드</ControllerSubtitle>
        <MusicSpeedInputContainer>
          <input
            className="MusicSpeedInput"
            onChange={handleSpeedInput}
            value={speed}
            type="range"
            min="1"
            max="100"
          />
          <SpeedValueContainer>
            <SpeedValue>Slow</SpeedValue>
            <SpeedValue>Fast</SpeedValue>
          </SpeedValueContainer>
        </MusicSpeedInputContainer>
      </motion.div>
      <motion.div className="Controller" whileHover={{ scale: 1.3 }}>
        <ControllerTitle>02</ControllerTitle>
        <ControllerSubtitle>분위기</ControllerSubtitle>
        <MusicMoodButtonContainer>
          <MusicMoodButton value="편안한" onClick={handleMoodButton}>
            편안한
          </MusicMoodButton>
          <MusicMoodButton value="신나는" onClick={handleMoodButton}>
            신나는
          </MusicMoodButton>
        </MusicMoodButtonContainer>
        <MusicMoodButtonContainer>
          <MusicMoodButton value="잔잔한" onClick={handleMoodButton}>
            잔잔한
          </MusicMoodButton>
          <MusicMoodButton value="흥겨운" onClick={handleMoodButton}>
            흥겨운
          </MusicMoodButton>
        </MusicMoodButtonContainer>
      </motion.div>
      <motion.div className="Controller" whileHover={{ scale: 1.3 }}>
        <ControllerTitle>03</ControllerTitle>
        <ControllerSubtitle>장소</ControllerSubtitle>
        <MusicPlaceButtonContainer>
          <MusicPlaceButton value="집" onClick={handlePlaceButton}>
            집
          </MusicPlaceButton>
          <MusicPlaceButton value="카페" onClick={handlePlaceButton}>
            카페
          </MusicPlaceButton>
        </MusicPlaceButtonContainer>
        <MusicPlaceButtonContainer>
          <MusicPlaceButton value="산책" onClick={handlePlaceButton}>
            산책
          </MusicPlaceButton>
          <MusicPlaceButton value="운동" onClick={handlePlaceButton}>
            운동
          </MusicPlaceButton>
        </MusicPlaceButtonContainer>
        <MusicPlaceButtonContainer>
          <MusicPlaceButton value="학교" onClick={handlePlaceButton}>
            학교
          </MusicPlaceButton>
          <MusicPlaceButton value="산" onClick={handlePlaceButton}>
            산
          </MusicPlaceButton>
        </MusicPlaceButtonContainer>
      </motion.div>
      <GeneratePrompt1Button>
        <img src={playIcon2} alt="play icon" />
      </GeneratePrompt1Button>
      <GeneratePromptButton
        onClick={() =>
          handleGenerateMusic({ speed, mood, place, strPrompt: '' })
        }
      >
        prompt 제출
      </GeneratePromptButton>
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

export const ControllerTitle = styled.p`
  position: relative;
  top: -1rem;
  color: #513d6c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: capitalize;
`;

export const ControllerSubtitle = styled.p`
  color: #513d6c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 1rem;
  font-weight: 300;
  text-transform: capitalize;
`;

const MusicSpeedInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const SpeedValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const SpeedValue = styled.p`
  color: #513d6c;
  font-size: 0.875rem;
  font-weight: 300;
  margin: 0 3rem;
  text-transform: capitalize;
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
  transition: 0.3s;
  & :hover {
    background: #ffffff;
    color: #000000; 
    );
  }
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

const GeneratePromptButton = styled.button`
  padding: 0.4rem 1rem;
  font-size: 1rem;
  display: block;
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

const GeneratePrompt1Button = styled.button`
  padding: 0.4rem 1rem;
  font-size: 1rem;
  display: block;
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
