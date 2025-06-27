import React from 'react';
import styled from '@emotion/styled';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
`;

const FilterChip = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid ${props => props.active ? '#000000' : '#e2e8f0'};
  background: ${props => props.active ? '#000000' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #000000;
    background: ${props => props.active ? '#333333' : '#f8fafc'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

export const FilterBar = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <FilterContainer>
      <FilterChip
        active={selectedCategory === null}
        onClick={() => onCategoryChange(null)}
      >
        All Components
      </FilterChip>
      {categories.map(category => (
        <FilterChip
          key={category}
          active={selectedCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </FilterChip>
      ))}
    </FilterContainer>
  );
};