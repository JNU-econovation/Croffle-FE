import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ProcessButton = ({ isMember }) => {
  const navigate = useNavigate();
  const onClickProcess = () => {
    if (isMember) {
      navigate('/createMember');
    } else if (!isMember) {
      navigate('/createGuest');
    }
  };

  return (
    <ProcessButtonContainer>
      <PlayImg src="../../../src/assets/startImg.png" alt="play" />
      <ProcessButtonContent onClick={onClickProcess}>
        Get Started
      </ProcessButtonContent>
    </ProcessButtonContainer>
  );
};

const ProcessButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  width: 20rem;
  height: 4rem;
  margin-top: 2.5rem;
  border: none;
  align-items: center;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const ProcessButtonContent = styled.p`
  font-size: 2rem;
  color: #5d5d5d;
  font-style: normal;
  font-weight: 500;
`;

const PlayImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
