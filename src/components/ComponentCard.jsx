import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Copy, Check } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { componentMap } from './demoComponents';

const Card = styled.div`
  background: white;
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
  background: #fafbfc;
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
  color: #1e293b;
`;

const ComponentDescription = styled.p`
  margin: 0 0 16px 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  line-height: 1.5;
`;

const CategoryTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #f1f5f9;
  color: #475569;
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
  padding: 10px 16px;
  background: ${props => props.copied ? '#000000' : 'white'};
  color: ${props => props.copied ? 'white' : '#000000'};
  border: 2px solid ${props => props.copied ? '#000000' : '#e2e8f0'};
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.copied ? '#000000' : '#f8fafc'};
    border-color: ${props => props.copied ? '#000000' : '#000000'};
    transform: translateY(-1px);
  }

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
    <Card>
      <PreviewContainer>
        {ComponentToRender ? <ComponentToRender /> : <div>Component preview not available</div>}
      </PreviewContainer>
      <ContentContainer>
        <CategoryTag>{component.category}</CategoryTag>
        <ComponentTitle>{component.name}</ComponentTitle>
        <ComponentDescription>{component.description}</ComponentDescription>
        <CopyToClipboard text={codeToShare} onCopy={handleCopy}>
          <CopyButton copied={copied}>
            {copied ? <Check /> : <Copy />}
            {copied ? 'Copied!' : 'Copy Code'}
          </CopyButton>
        </CopyToClipboard>
      </ContentContainer>
    </Card>
  );
};