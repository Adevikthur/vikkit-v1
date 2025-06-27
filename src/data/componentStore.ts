export interface ComponentData {
  id: string;
  name: string;
  category: string;
  description: string;
  jsx: string;
  code: string;
  props?: Record<string, any>;
}

export const componentStore: ComponentData[] = [
  {
    id: 'primary-button',
    name: 'Primary Button',
    category: 'Buttons',
    description: 'A stylish primary button with hover effects',
    jsx: `<PrimaryButton>Click me</PrimaryButton>`,
    code: `import styled from '@emotion/styled';

const PrimaryButton = styled.button\`
  background: #000000;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background: #333333;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
\`;`
  },
  {
    id: 'secondary-button',
    name: 'Secondary Button',
    category: 'Buttons',
    description: 'A clean secondary button with border styling',
    jsx: `<SecondaryButton>Secondary</SecondaryButton>`,
    code: `import styled from '@emotion/styled';

const SecondaryButton = styled.button\`
  background: transparent;
  color: #000000;
  border: 2px solid #e2e8f0;
  padding: 10px 22px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #000000;
    background: #f8fafc;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
\`;`
  },
  {
    id: 'modern-input',
    name: 'Modern Input',
    category: 'Inputs',
    description: 'A sleek input field with floating label effect',
    jsx: `<ModernInput placeholder="Enter your email" />`,
    code: `import styled from '@emotion/styled';

const ModernInput = styled.input\`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover {
    border-color: #cbd5e1;
  }

  &::placeholder {
    color: #94a3b8;
  }
\`;`
  },
  {
    id: 'feature-card',
    name: 'Feature Card',
    category: 'Cards',
    description: 'An elegant card component for showcasing features',
    jsx: `<FeatureCard>
  <h3>Amazing Feature</h3>
  <p>This is a beautiful card component.</p>
</FeatureCard>`,
    code: `import styled from '@emotion/styled';

const FeatureCard = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 0 0 12px 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #1e293b;
  }

  p {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
  }
\`;`
  },
  {
    id: 'success-alert',
    name: 'Success Alert',
    category: 'Alerts',
    description: 'A clean success notification component',
    jsx: `<SuccessAlert>
  <CheckIcon />
  Operation completed successfully!
</SuccessAlert>`,
    code: `import styled from '@emotion/styled';

const SuccessAlert = styled.div\`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #166534;

  svg {
    width: 20px;
    height: 20px;
    color: #10b981;
  }
\`;`
  },
  {
    id: 'modal-overlay',
    name: 'Modal Overlay',
    category: 'Modals',
    description: 'A flexible modal component with backdrop',
    jsx: `<ModalOverlay>
  <ModalContent>
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
  </ModalContent>
</ModalOverlay>`,
    code: `import styled from '@emotion/styled';

const ModalOverlay = styled.div\`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
\`;

const ModalContent = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  h2 {
    margin: 0 0 16px 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #1e293b;
  }

  p {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
  }
\`;`
  }
];

export const categories = Array.from(new Set(componentStore.map(comp => comp.category)));