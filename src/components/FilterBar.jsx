// FilterBar component for the Vikkit UI Components project
// Provides category-based filtering for the component gallery

import React from 'react';
import styled from '@emotion/styled';

// Styled component for the filter container
// Provides layout for filter chips with responsive wrapping
const FilterContainer = styled.div`
  display: flex; /* Flexbox layout for filter chips */
  flex-wrap: wrap; /* Allow chips to wrap to next line on smaller screens */
  gap: 12px; /* Consistent spacing between filter chips */
  margin-bottom: 32px; /* Space between filter bar and component grid */
`;

// Styled component for individual category filter chips
// Provides theme-aware styling with active and inactive states
const FilterChip = styled.button`
  padding: 8px 16px;
  border-radius: 9999px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  border: 2px solid #e5e7eb;
  background: #ffffff;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
  
  /* Focus styles for accessibility */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  /* Hover effects for inactive state */
  &:hover {
    background: #f9fafb;
    border-color: #000000;
  }
  
  /* Active state styling */
  ${props => props.active && `
    background: #000000;
    color: #ffffff;
    border-color: #000000;
    
    &:hover {
      background: #000000;
      border-color: #000000;
    }
  `}
  
  /* Dark mode styling */
  .dark & {
    background: #1f2937;
    color: #d1d5db;
    border-color: #374151;
    
    &:hover {
      background: #374151;
      border-color: #ffffff;
    }
    
    ${props => props.active && `
      background: #ffffff;
      color: #000000;
      border-color: #ffffff;
      
      &:hover {
        background: #ffffff;
        border-color: #ffffff;
      }
    `}
  }
`;

// Main FilterBar component
export const FilterBar = ({
  categories, // Array of available category names
  selectedCategory, // Currently selected category (null for "All")
  onCategoryChange // Callback function when category selection changes
}) => {
  return (
    <FilterContainer>
      {/* "All Components" filter chip - shows all components when selected */}
      <FilterChip
        active={selectedCategory === null} // Active when no category is selected
        onClick={() => onCategoryChange(null)} // Clear category filter
      >
        All Components
      </FilterChip>
      
      {/* Render filter chips for each available category */}
      {categories.map(category => (
        <FilterChip
          key={category} // Unique key for React list rendering
          active={selectedCategory === category} // Active when this category is selected
          onClick={() => onCategoryChange(category)} // Set this category as selected
        >
          {category}
        </FilterChip>
      ))}
    </FilterContainer>
  );
};