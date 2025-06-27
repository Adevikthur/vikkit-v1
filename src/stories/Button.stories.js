import { PrimaryButton, SecondaryButton, DangerButton, IconButton } from '../components/demoComponents';
import { Plus } from 'lucide-react';

export default {
  title: 'Components/Buttons',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  render: () => <PrimaryButton>Primary Button</PrimaryButton>,
};

export const Secondary = {
  render: () => <SecondaryButton>Secondary Button</SecondaryButton>,
};

export const Danger = {
  render: () => <DangerButton>Delete</DangerButton>,
};

export const WithIcon = {
  render: () => (
    <IconButton>
      <Plus size={16} />
      Add Item
    </IconButton>
  ),
};