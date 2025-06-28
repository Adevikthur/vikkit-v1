// ComponentGallery component for the Vikkit UI Components project
// Displays a grid of component cards with filtering capabilities

import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { FilterBar } from './FilterBar';
import { ComponentCard } from './ComponentCard';
import { componentStore, categories } from '../data/componentStore';

// Styled component for the main gallery container
// Provides consistent layout and responsive padding
const GalleryContainer = styled.div`
  max-width: 1200px; /* Maximum width for large screens */
  margin: 0 auto; /* Center the gallery horizontally */
  padding: 0 20px 40px; /* Horizontal and bottom padding */
`;

// Styled component for the component grid layout
// Uses CSS Grid for responsive component display
const ComponentGrid = styled.div`
  display: grid; /* CSS Grid layout */
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); /* Responsive columns */
  gap: 24px; /* Space between grid items */

  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column on mobile */
    gap: 20px; /* Reduced gap for mobile */
  }
`;

// Styled component for empty state display
// Shown when no components match the current filter
const EmptyState = styled.div`
  text-align: center; /* Center the empty state content */
  padding: 60px 20px; /* Generous padding for visual balance */
  color: #64748b; /* Muted text color */

  /* Empty state heading styles */
  h3 {
    margin: 0 0 8px 0; /* Remove default margins, add bottom spacing */
    font-family: 'Inter', sans-serif; /* Consistent font family */
    font-weight: 600; /* Semi-bold weight for emphasis */
    font-size: 18px; /* Appropriate size for heading */
    color: #1e293b; /* Darker color for heading */
  }

  /* Empty state paragraph styles */
  p {
    margin: 0; /* Remove default margins */
    font-family: 'Inter', sans-serif; /* Consistent font family */
    font-size: 14px; /* Smaller size for description */
    line-height: 1.5; /* Comfortable line height for readability */
  }
`;

// Main ComponentGallery component
export const ComponentGallery = () => {
  // State for tracking the currently selected category filter
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Memoized filtered components based on selected category
  // Recalculates only when selectedCategory changes
  const filteredComponents = useMemo(() => {
    // If no category is selected, show all components
    if (!selectedCategory) return componentStore;
    
    // Filter components by the selected category
    return componentStore.filter(component => component.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <GalleryContainer>
      {/* Filter bar for category selection */}
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {/* Conditional rendering based on filtered results */}
      {filteredComponents.length > 0 ? (
        // Display grid of component cards when components are available
        <ComponentGrid>
          {filteredComponents.map(component => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </ComponentGrid>
      ) : (
        // Display empty state when no components match the filter
        <EmptyState>
          <h3>No components found</h3>
          <p>Try selecting a different category or clear the filters to see all components.</p>
        </EmptyState>
      )}
    </GalleryContainer>
  );
};