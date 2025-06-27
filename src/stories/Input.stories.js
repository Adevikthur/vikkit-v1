import { ModernInput, SearchInput, SearchInputContainer, ModernTextarea, SelectDropdown } from '../components/demoComponents';
import { Search } from 'lucide-react';

export default {
  title: 'Components/Inputs',
  component: ModernInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const TextInput = {
  render: () => <ModernInput placeholder="Enter your email" />,
};

export const SearchInput = {
  render: () => (
    <SearchInputContainer>
      <Search size={16} />
      <SearchInput placeholder="Search..." />
    </SearchInputContainer>
  ),
};

export const Textarea = {
  render: () => <ModernTextarea placeholder="Enter your message..." />,
};

export const Select = {
  render: () => (
    <SelectDropdown>
      <option>Choose an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </SelectDropdown>
  ),
};