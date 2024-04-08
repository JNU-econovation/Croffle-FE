import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface LayoutProps extends PropsWithChildren {}

export const PageLayout = ({ children }: LayoutProps) => {
  return <LayoutBox>{children}</LayoutBox>;
};

const LayoutBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;
