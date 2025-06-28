// ComponentCard component for the Vikkit UI Components project
// Displays individual component information with preview, copy functionality, and metadata

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Copy, Check } from 'lucide-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { componentMap } from './demoComponents';

// Styled component for the main card container
// Provides consistent styling with hover effects and theme support
const Card = styled.div`
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background: #ffffff;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .dark & {
    background: #111827;
    border-color: #374151;
  }
`;

// Styled component for the component preview area
const PreviewContainer = styled.div`
  padding: 32px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  background: #fafbfc;
  
  .dark & {
    background: #1f2937;
    border-bottom-color: #374151;
  }
`;

// Styled component for the card content area
const ContentContainer = styled.div`
  padding: 20px;
`;

// Styled component for the component title
const ComponentTitle = styled.h3`
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #111827;
  
  .dark & {
    color: #ffffff;
  }
`;

// Styled component for the component description
const ComponentDescription = styled.p`
  margin: 0 0 16px 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #6b7280;
  
  .dark & {
    color: #d1d5db;
  }
`;

// Styled component for the category tag
const CategoryTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 16px;
  background: #f3f4f6;
  color: #4b5563;
  
  .dark & {
    background: #374151;
    color: #d1d5db;
  }
`;

// Styled component for the copy button
const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  margin-top: 8px;
  border-radius: 6px;
  border: 2px solid #e5e7eb;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #ffffff;
  color: #000000;

  &:active {
    transform: translateY(0);
  }
  
  &:hover {
    border-color: #000000;
  }

  svg {
    width: 16px;
    height: 16px;
  }
  
  .dark & {
    background: #1f2937;
    color: #ffffff;
    border-color: #374151;
    
    &:hover {
      border-color: #ffffff;
    }
  }
  
  ${props => props.copied && `
    background: #000000 !important;
    color: #ffffff !important;
    border-color: #000000 !important;
    
    .dark & {
      background: #ffffff !important;
      color: #000000 !important;
      border-color: #ffffff !important;
    }
  `}
`;

// Main ComponentCard component
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
        <CategoryTag>
          {component.category}
        </CategoryTag>
        
        <ComponentTitle>
          {component.name}
        </ComponentTitle>
        
        <ComponentDescription>
          {component.description}
        </ComponentDescription>
        
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