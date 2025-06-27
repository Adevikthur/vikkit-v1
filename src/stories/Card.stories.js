import { FeatureCard, ProductCard, ProductImage, ProductContent, ProductTitle, ProductPrice, ProductDescription, StatsCard, StatsValue, StatsLabel, StatsChange } from '../components/demoComponents';

export default {
  title: 'Components/Cards',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Feature = {
  render: () => (
    <FeatureCard>
      <h3>Amazing Feature</h3>
      <p>This is a beautiful card component with hover effects.</p>
    </FeatureCard>
  ),
};

export const Product = {
  render: () => (
    <ProductCard>
      <ProductImage src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop" alt="Product" />
      <ProductContent>
        <ProductTitle>Premium Headphones</ProductTitle>
        <ProductPrice>$199.99</ProductPrice>
        <ProductDescription>High-quality wireless headphones with noise cancellation.</ProductDescription>
      </ProductContent>
    </ProductCard>
  ),
};

export const Stats = {
  render: () => (
    <StatsCard>
      <StatsValue>2,847</StatsValue>
      <StatsLabel>Active Users</StatsLabel>
      <StatsChange positive>+23%</StatsChange>
    </StatsCard>
  ),
};