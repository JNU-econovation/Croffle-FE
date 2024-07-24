import React from 'react';
import styled from 'styled-components';

export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <ProgressBarContainer>
      <Progress style={{ width: `${progress}%` }} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 0.5rem;
  background-color: #d8d8d8;
  border-radius: 0.5rem;
`;

const Progress = styled.div`
  width: 0%;
  height: 100%;
  background-color: #3d1655;
  border-radius: 0.5rem;
`;
