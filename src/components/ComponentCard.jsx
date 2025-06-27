import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Copy, Check } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { componentMap } from './demoComponents';

const Card = styled.div`
  border-radius: 12px;
  border: 1px solid #f1f5f9;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const PreviewContainer = styled.div`
  padding: 32px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const ComponentTitle = styled.h3`
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
`;

const ComponentDescription = styled.p`
  margin: 0 0 16px 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.5;
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ComponentCard = ({ component }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeToShare = `${component.jsx}\n\n${component.code}`;
  const ComponentToRender = componentMap[component.id];

  return (
    <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <PreviewContainer className="bg-[#fafbfc] dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        {ComponentToRender ? <ComponentToRender /> : <div>Component preview not available</div>}
      </PreviewContainer>
      <ContentContainer>
        <CategoryTag className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{component.category}</CategoryTag>
        <ComponentTitle className="text-gray-900 dark:text-white">{component.name}</ComponentTitle>
        <ComponentDescription className="text-gray-500 dark:text-gray-300">{component.description}</ComponentDescription>
        <CopyToClipboard text={codeToShare} onCopy={handleCopy}>
          <CopyButton
            copied={copied}
            className={`py-2 px-4 mt-2 border-2 ${copied ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' : 'bg-white text-black border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700'} transition-colors duration-300`}
          >
            {copied ? <Check /> : <Copy />}
            {copied ? 'Copied!' : 'Copy Code'}
          </CopyButton>
        </CopyToClipboard>
      </ContentContainer>
    </Card>
  );
};