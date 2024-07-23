import styled from 'styled-components';
import { useMember } from '../../hooks/useMember';
import google from '@img/assets/google.png';


export const GoogleLoginButton = () => {
  const { handleGoogleLogin } = useMember();

  return (
    <ProcessButtonContainer onClick={handleGoogleLogin}>
      <SocialImg src={google} alt="Google Logo" />
      <ProcessButtonContent>Login With Google</ProcessButtonContent>
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
  font-size: 1.5rem;
  color: #5d5d5d;
  font-style: normal;
  font-weight: 500;
`;

const SocialImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
