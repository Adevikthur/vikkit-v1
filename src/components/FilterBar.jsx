import React from 'react';
import styled from '@emotion/styled';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
`;

// Remove styled FilterChip, use a functional component with Tailwind classes
const FilterChip = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500
      ${active
        ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-100 hover:border-black dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-white'}
    `}
    onClick={onClick}
    tabIndex={0}
    aria-pressed={active}
  >
    {children}
  </button>
);

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