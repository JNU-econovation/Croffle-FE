import styled from 'styled-components';
import './Create.css';
import { PromptProps, useGenerate } from '../../hooks/useGenerate';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateController = () => {
  const [promptStep, setPromptStep] = useState<number>(1);
  const { promptState, setPromptState } = useGenerate();
  const { speed, mood, place, strPrompt } = promptState;
  const { setSpeed, setMood, setPlace, setStrPrompt } = setPromptState;
  const { generateMusic } = useGenerate();
  const { generateMemberMusic } = useGenerate();
  const navigate = useNavigate();
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

  const handleStrPromptInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setStrPrompt(value);
  };

  const handlePromptStep = () => {
    setPromptStep(promptStep + 1);
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
    navigate('/createEnd');
  };

  return (
    <>
      {promptStep === 1 && (
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
          <ChangeStepButton onClick={handlePromptStep}>다음</ChangeStepButton>
        </CreateControllerContainer>
      )}
      {promptStep === 2 && (
        <MusicStringPromptContainer>
          <PromptInputContainer>
            <PromptTitle>더 원하는 내용을 작성해주세요.</PromptTitle>
            <PromptInput
              type="text"
              placeholder="예시 : 유튜브에 사용할 광활한 음악"
              onChange={handleStrPromptInput}
              value={strPrompt}
            />
          </PromptInputContainer>
          <GeneratePromptButton
            onClick={() =>
              handleGenerateMusic({ speed, mood, place, strPrompt })
            }
          >
            prompt 제출
          </GeneratePromptButton>
        </MusicStringPromptContainer>
      )}
    </>
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

const ChangeStepButton = styled.button`
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

const MusicStringPromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-top: 3rem;
`;

const PromptInputContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 40rem;
  height: 15rem;
  margin: 2rem 0 2rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.875rem;
  border: 1px solid #e2d2fe;
  background: #fff;
  box-shadow: -2px 5px 13px 2px rgba(0, 0, 0, 0.25);
`;

const PromptTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #513d6c;
  letter-spacing: 0.125rem;
  text-transform: capitalize;
`;

const PromptInput = styled.input`
  width: 30rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  height: 2rem;
  border: none;
  border-bottom: 1px solid #513d6c;
  background: none;
`;
