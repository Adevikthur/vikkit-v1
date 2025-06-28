// Storybook stories for Card components
// Demonstrates different card variants and their usage in the Vikkit UI library

import { FeatureCard, ProductCard, ProductImage, ProductContent, ProductTitle, ProductPrice, ProductDescription, StatsCard, StatsValue, StatsLabel, StatsChange } from '../components/demoComponents';

// Default export for Storybook configuration
export default {
  title: 'Components/Cards', // Storybook sidebar category and title
  component: FeatureCard, // Primary component for this story group
  parameters: {
    layout: 'centered', // Center the component in the story canvas
  },
  tags: ['autodocs'], // Enable automatic documentation generation
};

// Story for the feature card variant
// Demonstrates a simple card for highlighting features or content
export const Feature = {
  render: () => (
    <FeatureCard>
      <h3>Amazing Feature</h3>
      <p>This is a beautiful card component with hover effects.</p>
    </FeatureCard>
  ),
};

// Story for the product card variant
// Demonstrates a complex card for e-commerce product display
export const Product = {
  render: () => (
    <ProductCard>
      {/* Product image with placeholder from Pexels */}
      <ProductImage 
        src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop" 
        alt="Product" 
      />
      <ProductContent>
        <ProductTitle>Premium Headphones</ProductTitle>
        <ProductPrice>$199.99</ProductPrice>
        <ProductDescription>High-quality wireless headphones with noise cancellation.</ProductDescription>
      </ProductContent>
    </ProductCard>
  ),
};

// Story for the stats card variant
// Demonstrates a card for displaying key metrics and statistics
export const Stats = {
  render: () => (
    <StatsCard>
      <StatsValue>2,847</StatsValue>
      <StatsLabel>Active Users</StatsLabel>
      <StatsChange positive>+23%</StatsChange>
    </StatsCard>
  ),
};