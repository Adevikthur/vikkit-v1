// Storybook stories for Alert components
// Demonstrates different alert variants and their usage in the Vikkit UI library

import { SuccessAlert, ErrorAlert, WarningAlert, InfoAlert } from '../components/demoComponents';
import { Check, X, AlertTriangle, Info } from 'lucide-react';

// Default export for Storybook configuration
export default {
  title: 'Components/Alerts', // Storybook sidebar category and title
  component: SuccessAlert, // Primary component for this story group
  parameters: {
    layout: 'centered', // Center the component in the story canvas
  },
  tags: ['autodocs'], // Enable automatic documentation generation
};

// Story for the success alert variant
// Demonstrates positive feedback and confirmation messages
export const Success = {
  render: () => (
    <SuccessAlert>
      <Check size={20} />
      Operation completed successfully!
    </SuccessAlert>
  ),
};

// Story for the error alert variant
// Demonstrates error messages and failure notifications
export const Error = {
  render: () => (
    <ErrorAlert>
      <X size={20} />
      Something went wrong. Please try again.
    </ErrorAlert>
  ),
};

// Story for the warning alert variant
// Demonstrates cautionary messages and important notices
export const Warning = {
  render: () => (
    <WarningAlert>
      <AlertTriangle size={20} />
      Please review your information before proceeding.
    </WarningAlert>
  ),
};

// Story for the info alert variant
// Demonstrates informational messages and helpful tips
export const Info = {
  render: () => (
    <InfoAlert>
      <Info size={20} />
      Here's some helpful information for you.
    </InfoAlert>
  ),
};