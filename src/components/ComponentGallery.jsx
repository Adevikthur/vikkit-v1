import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { FilterBar } from './FilterBar';
import { ComponentCard } from './ComponentCard';
import { componentStore, categories } from '../data/componentStore';

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #64748b;

  h3 {
    margin: 0 0 8px 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #1e293b;
  }

  p {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const ComponentGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredComponents = useMemo(() => {
    if (!selectedCategory) return componentStore;
    return componentStore.filter(component => component.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <GalleryContainer>
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      {filteredComponents.length > 0 ? (
        <ComponentGrid>
          {filteredComponents.map(component => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </ComponentGrid>
      ) : (
        <EmptyState>
          <h3>No components found</h3>
          <p>Try selecting a different category or clear the filters to see all components.</p>
        </EmptyState>
      )}
    </GalleryContainer>
  );
};