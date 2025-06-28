// Storybook stories for Button components
// Demonstrates different button variants and their usage in the Vikkit UI library

import { PrimaryButton, SecondaryButton, DangerButton, IconButton } from '../components/demoComponents';
import { Plus } from 'lucide-react';

// Default export for Storybook configuration
export default {
  title: 'Components/Buttons', // Storybook sidebar category and title
  component: PrimaryButton, // Primary component for this story group
  parameters: {
    layout: 'centered', // Center the component in the story canvas
  },
  tags: ['autodocs'], // Enable automatic documentation generation
};

// Story for the primary button variant
// Demonstrates the main call-to-action button style
export const Primary = {
  render: () => <PrimaryButton>Primary Button</PrimaryButton>,
};

// Story for the secondary button variant
// Demonstrates the secondary action button style
export const Secondary = {
  render: () => <SecondaryButton>Secondary Button</SecondaryButton>,
};

// Story for the danger button variant
// Demonstrates the destructive action button style
export const Danger = {
  render: () => <DangerButton>Delete</DangerButton>,
};

// Story for the icon button variant
// Demonstrates button with icon and text combination
export const WithIcon = {
  render: () => (
    <IconButton>
      <Plus size={16} />
      Add Item
    </IconButton>
  ),
};