// Storybook stories for Input components
// Demonstrates different input variants and their usage in the Vikkit UI library

import { ModernInput, SearchInput, SearchInputContainer, ModernTextarea, SelectDropdown } from '../components/demoComponents';
import { Search } from 'lucide-react';

// Default export for Storybook configuration
export default {
  title: 'Components/Inputs', // Storybook sidebar category and title
  component: ModernInput, // Primary component for this story group
  parameters: {
    layout: 'centered', // Center the component in the story canvas
  },
  tags: ['autodocs'], // Enable automatic documentation generation
};

// Story for the basic text input variant
// Demonstrates a modern styled text input field
export const TextInput = {
  render: () => <ModernInput placeholder="Enter your email" />,
};

// Story for the search input variant
// Demonstrates a search input with icon and container styling
export const SearchInput = {
  render: () => (
    <SearchInputContainer>
      <Search size={16} />
      <SearchInput placeholder="Search..." />
    </SearchInputContainer>
  ),
};

// Story for the textarea variant
// Demonstrates a multi-line text input for longer content
export const Textarea = {
  render: () => <ModernTextarea placeholder="Enter your message..." />,
};

// Story for the select dropdown variant
// Demonstrates a styled select dropdown with options
export const Select = {
  render: () => (
    <SelectDropdown>
      <option>Choose an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </SelectDropdown>
  ),
};