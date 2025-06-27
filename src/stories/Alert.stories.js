import { SuccessAlert, ErrorAlert, WarningAlert, InfoAlert } from '../components/demoComponents';
import { Check, X, AlertTriangle, Info } from 'lucide-react';

export default {
  title: 'Components/Alerts',
  component: SuccessAlert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Success = {
  render: () => (
    <SuccessAlert>
      <Check size={20} />
      Operation completed successfully!
    </SuccessAlert>
  ),
};

export const Error = {
  render: () => (
    <ErrorAlert>
      <X size={20} />
      Something went wrong. Please try again.
    </ErrorAlert>
  ),
};

export const Warning = {
  render: () => (
    <WarningAlert>
      <AlertTriangle size={20} />
      Please review your information before proceeding.
    </WarningAlert>
  ),
};

export const Info = {
  render: () => (
    <InfoAlert>
      <Info size={20} />
      Here's some helpful information for you.
    </InfoAlert>
  ),
};