import React from 'react';
import styled from '@emotion/styled';
import { Package } from 'lucide-react';

const HeaderContainer = styled.header`
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
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.h1`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
`;

const Subtitle = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeaderContent>
        <Logo>
          <LogoIcon className="bg-black dark:bg-white text-white dark:text-black">
            <Package size={20} />
          </LogoIcon>
          <LogoText className="text-gray-900 dark:text-white">VikKit</LogoText>
        </Logo>
        <Subtitle className="text-gray-500 dark:text-gray-300">Emotion-powered UI components ready to copy & paste</Subtitle>
      </HeaderContent>
    </HeaderContainer>
  );
};