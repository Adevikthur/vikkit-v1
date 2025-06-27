import React from 'react';
import styled from '@emotion/styled';
import { Package } from 'lucide-react';

const HeaderContainer = styled.header`
  background: white;
  border-bottom: 1px solid #f1f5f9;
  padding: 20px 0;
  margin-bottom: 40px;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #000000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const LogoText = styled.h1`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  color: #1e293b;
`;

const Subtitle = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoIcon>
            <Package size={20} />
          </LogoIcon>
          <LogoText>VikKit</LogoText>
        </Logo>
        <Subtitle>Emotion-powered UI components ready to copy & paste</Subtitle>
      </HeaderContent>
    </HeaderContainer>
  );
};