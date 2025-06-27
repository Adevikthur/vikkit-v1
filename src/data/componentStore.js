export const componentStore = [
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
    id: 'danger-button',
    name: 'Danger Button',
    category: 'Buttons',
    description: 'A destructive action button with red styling',
    jsx: `<DangerButton>Delete</DangerButton>`,
    code: `import styled from '@emotion/styled';

const DangerButton = styled.button\`
  background: #ef4444;
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
    background: #dc2626;
    box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }
\`;`
  },
  {
    id: 'icon-button',
    name: 'Icon Button',
    category: 'Buttons',
    description: 'A compact button with icon and text',
    jsx: `<IconButton>
  <PlusIcon />
  Add Item
</IconButton>`,
    code: `import styled from '@emotion/styled';

const IconButton = styled.button\`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #000000;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #333333;
    transform: translateY(-1px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
\`;`
  },
  {
    id: 'floating-action-button',
    name: 'Floating Action Button',
    category: 'Buttons',
    description: 'A circular floating action button with shadow',
    jsx: `<FloatingActionButton>
  <PlusIcon />
</FloatingActionButton>`,
    code: `import styled from '@emotion/styled';

const FloatingActionButton = styled.button\`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
  transition: all 0.2s ease;

  &:hover {
    background: #5855eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.5);
  }

  svg {
    width: 24px;
    height: 24px;
  }
\`;`
  },
  {
    id: 'ghost-button',
    name: 'Ghost Button',
    category: 'Buttons',
    description: 'A minimal button with subtle hover effects',
    jsx: `<GhostButton>Ghost Button</GhostButton>`,
    code: `import styled from '@emotion/styled';

const GhostButton = styled.button\`
  background: transparent;
  color: #64748b;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f1f5f9;
    color: #1e293b;
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
    id: 'search-input',
    name: 'Search Input',
    category: 'Inputs',
    description: 'A search input with icon and rounded styling',
    jsx: `<SearchInputContainer>
  <SearchIcon />
  <SearchInput placeholder="Search..." />
</SearchInputContainer>`,
    code: `import styled from '@emotion/styled';

const SearchInputContainer = styled.div\`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;

  svg {
    position: absolute;
    left: 12px;
    width: 16px;
    height: 16px;
    color: #94a3b8;
    z-index: 1;
  }
\`;

const SearchInput = styled.input\`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 2px solid #e2e8f0;
  border-radius: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background: white;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #94a3b8;
  }
\`;`
  },
  {
    id: 'floating-label-input',
    name: 'Floating Label Input',
    category: 'Inputs',
    description: 'An input with animated floating label',
    jsx: `<FloatingLabelContainer>
  <FloatingLabelInput placeholder=" " />
  <FloatingLabel>Email Address</FloatingLabel>
</FloatingLabelContainer>`,
    code: `import styled from '@emotion/styled';

const FloatingLabelContainer = styled.div\`
  position: relative;
  width: 100%;
  max-width: 280px;
\`;

const FloatingLabelInput = styled.input\`
  width: 100%;
  padding: 16px 12px 8px;
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

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: 8px;
    font-size: 12px;
    color: #6366f1;
  }
\`;

const FloatingLabel = styled.label\`
  position: absolute;
  left: 12px;
  top: 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #94a3b8;
  pointer-events: none;
  transition: all 0.2s ease;
  background: white;
  padding: 0 4px;
\`;`
  },
  {
    id: 'textarea',
    name: 'Modern Textarea',
    category: 'Inputs',
    description: 'A resizable textarea with modern styling',
    jsx: `<ModernTextarea placeholder="Enter your message..." />`,
    code: `import styled from '@emotion/styled';

const ModernTextarea = styled.textarea\`
  width: 100%;
  min-height: 100px;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background: white;
  resize: vertical;
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
    id: 'select-dropdown',
    name: 'Select Dropdown',
    category: 'Inputs',
    description: 'A styled select dropdown with custom arrow',
    jsx: `<SelectDropdown>
  <option>Choose an option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</SelectDropdown>`,
    code: `import styled from '@emotion/styled';

const SelectDropdown = styled.select\`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &:hover {
    border-color: #cbd5e1;
  }
\`;`
  },
  {
    id: 'checkbox',
    name: 'Custom Checkbox',
    category: 'Inputs',
    description: 'A styled checkbox with custom appearance',
    jsx: `<CheckboxContainer>
  <CheckboxInput type="checkbox" defaultChecked />
  I agree to the terms
</CheckboxContainer>`,
    code: `import styled from '@emotion/styled';

const CheckboxContainer = styled.label\`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1e293b;
\`;

const CheckboxInput = styled.input\`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:checked {
    background: #6366f1;
    border-color: #6366f1;
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    top: -2px;
    left: 2px;
    color: white;
    font-size: 12px;
    font-weight: bold;
  }

  &:hover {
    border-color: #6366f1;
  }
\`;`
  },
  {
    id: 'radio-button',
    name: 'Custom Radio Button',
    category: 'Inputs',
    description: 'A styled radio button with custom appearance',
    jsx: `<RadioContainer>
  <RadioInput type="radio" name="option" defaultChecked />
  Option 1
</RadioContainer>`,
    code: `import styled from '@emotion/styled';

const RadioContainer = styled.label\`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1e293b;
\`;

const RadioInput = styled.input\`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:checked {
    border-color: #6366f1;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    background: #6366f1;
    border-radius: 50%;
  }

  &:hover {
    border-color: #6366f1;
  }
\`;`
  },
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    category: 'Inputs',
    description: 'A modern toggle switch component',
    jsx: `<ToggleSwitch checked={true} />`,
    code: `import styled from '@emotion/styled';

const ToggleSwitch = styled.label\`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  cursor: pointer;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: \${props => props.checked ? '#10b981' : '#e2e8f0'};
    border-radius: 12px;
    transition: all 0.2s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: \${props => props.checked ? '26px' : '2px'};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
    id: 'product-card',
    name: 'Product Card',
    category: 'Cards',
    description: 'A product showcase card with image and details',
    jsx: `<ProductCard>
  <ProductImage src="https://via.placeholder.com/200x150" alt="Product" />
  <ProductContent>
    <ProductTitle>Product Name</ProductTitle>
    <ProductPrice>$99.99</ProductPrice>
    <ProductDescription>Beautiful product description here.</ProductDescription>
  </ProductContent>
</ProductCard>`,
    code: `import styled from '@emotion/styled';

const ProductCard = styled.div\`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  cursor: pointer;
  max-width: 280px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
\`;

const ProductImage = styled.img\`
  width: 100%;
  height: 150px;
  object-fit: cover;
\`;

const ProductContent = styled.div\`
  padding: 16px;
\`;

const ProductTitle = styled.h3\`
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #1e293b;
\`;

const ProductPrice = styled.div\`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #10b981;
  margin-bottom: 8px;
\`;

const ProductDescription = styled.p\`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  line-height: 1.4;
\`;`
  },
  {
    id: 'pricing-card',
    name: 'Pricing Card',
    category: 'Cards',
    description: 'A pricing plan card with features and CTA',
    jsx: `<PricingCard>
  <PricingBadge>Popular</PricingBadge>
  <PricingTitle>Pro Plan</PricingTitle>
  <PricingPrice>$29</PricingPrice>
  <PricingPeriod>per month</PricingPeriod>
  <PricingFeatures>
    <li><CheckIcon />Unlimited projects</li>
    <li><CheckIcon />Priority support</li>
    <li><CheckIcon />Advanced analytics</li>
  </PricingFeatures>
  <PrimaryButton>Get Started</PrimaryButton>
</PricingCard>`,
    code: `import styled from '@emotion/styled';

const PricingCard = styled.div\`
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 2px solid #f1f5f9;
  transition: all 0.3s ease;
  text-align: center;
  max-width: 280px;
  position: relative;

  &:hover {
    border-color: #6366f1;
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
\`;

const PricingBadge = styled.div\`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #6366f1;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
\`;

const PricingTitle = styled.h3\`
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #1e293b;
\`;

const PricingPrice = styled.div\`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #1e293b;
  margin-bottom: 4px;
\`;

const PricingPeriod = styled.div\`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 24px;
\`;

const PricingFeatures = styled.ul\`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;

  li {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: #10b981;
      width: 16px;
      height: 16px;
    }
  }
\`;`
  },
  {
    id: 'stats-card',
    name: 'Stats Card',
    category: 'Cards',
    description: 'A card for displaying statistics and metrics',
    jsx: `<StatsCard>
  <StatsValue>1,234</StatsValue>
  <StatsLabel>Total Users</StatsLabel>
  <StatsChange positive>+12%</StatsChange>
</StatsCard>`,
    code: `import styled from '@emotion/styled';

const StatsCard = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
  text-align: center;
  min-width: 160px;
\`;

const StatsValue = styled.div\`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 8px;
\`;

const StatsLabel = styled.div\`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 12px;
\`;

const StatsChange = styled.div\`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: \${props => props.positive ? '#10b981' : '#ef4444'};
  background: \${props => props.positive ? '#f0fdf4' : '#fef2f2'};
  padding: 4px 8px;
  border-radius: 12px;
  display: inline-block;
\`;`
  },
  {
    id: 'testimonial-card',
    name: 'Testimonial Card',
    category: 'Cards',
    description: 'A card for displaying customer testimonials',
    jsx: `<TestimonialCard>
  <TestimonialText>
    This product has completely transformed how we work.
  </TestimonialText>
  <TestimonialAuthor>
    <TestimonialAvatar src="https://via.placeholder.com/48" alt="Sarah Johnson" />
    <TestimonialInfo>
      <h4>Sarah Johnson</h4>
      <p>Product Manager at TechCorp</p>
    </TestimonialInfo>
  </TestimonialAuthor>
</TestimonialCard>`,
    code: `import styled from '@emotion/styled';

const TestimonialCard = styled.div\`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
  max-width: 350px;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 60px;
    color: #e2e8f0;
    font-family: serif;
  }
\`;

const TestimonialText = styled.p\`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #1e293b;
  line-height: 1.6;
  margin: 0 0 20px 0;
  font-style: italic;
\`;

const TestimonialAuthor = styled.div\`
  display: flex;
  align-items: center;
  gap: 12px;
\`;

const TestimonialAvatar = styled.img\`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
\`;

const TestimonialInfo = styled.div\`
  h4 {
    margin: 0 0 4px 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #1e293b;
  }

  p {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    color: #64748b;
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
    id: 'error-alert',
    name: 'Error Alert',
    category: 'Alerts',
    description: 'An error notification with red styling',
    jsx: `<ErrorAlert>
  <XIcon />
  Something went wrong. Please try again.
</ErrorAlert>`,
    code: `import styled from '@emotion/styled';

const ErrorAlert = styled.div\`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #991b1b;

  svg {
    width: 20px;
    height: 20px;
    color: #ef4444;
  }
\`;`
  },
  {
    id: 'warning-alert',
    name: 'Warning Alert',
    category: 'Alerts',
    description: 'A warning notification with yellow styling',
    jsx: `<WarningAlert>
  <AlertTriangleIcon />
  Please review your information before proceeding.
</WarningAlert>`,
    code: `import styled from '@emotion/styled';

const WarningAlert = styled.div\`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fffbeb;
  border: 1px solid #fed7aa;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #92400e;

  svg {
    width: 20px;
    height: 20px;
    color: #f59e0b;
  }
\`;`
  },
  {
    id: 'info-alert',
    name: 'Info Alert',
    category: 'Alerts',
    description: 'An informational alert with blue styling',
    jsx: `<InfoAlert>
  <InfoIcon />
  Here's some helpful information for you.
</InfoAlert>`,
    code: `import styled from '@emotion/styled';

const InfoAlert = styled.div\`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1e40af;

  svg {
    width: 20px;
    height: 20px;
    color: #3b82f6;
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
  },
  {
    id: 'confirmation-modal',
    name: 'Confirmation Modal',
    category: 'Modals',
    description: 'A modal for confirming destructive actions',
    jsx: `<ConfirmationModal>
  <ModalHeader>
    <h2>Confirm Action</h2>
  </ModalHeader>
  <ModalBody>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  </ModalBody>
  <ModalFooter>
    <CancelButton>Cancel</CancelButton>
    <ConfirmButton>Delete</ConfirmButton>
  </ModalFooter>
</ConfirmationModal>`,
    code: `import styled from '@emotion/styled';

const ConfirmationModal = styled.div\`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  overflow: hidden;
\`;

const ModalHeader = styled.div\`
  padding: 24px 24px 0;
  
  h2 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #1e293b;
  }
\`;

const ModalBody = styled.div\`
  padding: 16px 24px;
  
  p {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
  }
\`;

const ModalFooter = styled.div\`
  padding: 16px 24px 24px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
\`;

const CancelButton = styled.button\`
  padding: 8px 16px;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e1;
  }
\`;

const ConfirmButton = styled.button\`
  padding: 8px 16px;
  border: none;
  background: #ef4444;
  color: white;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #dc2626;
  }
\`;`
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'Display',
    description: 'A small badge for status or labels',
    jsx: `<Badge variant="success">Active</Badge>`,
    code: `import styled from '@emotion/styled';

const Badge = styled.span\`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  
  \${props => {
    switch (props.variant) {
      case 'success':
        return \`
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        \`;
      case 'error':
        return \`
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        \`;
      case 'warning':
        return \`
          background: #fffbeb;
          color: #92400e;
          border: 1px solid #fed7aa;
        \`;
      default:
        return \`
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        \`;
    }
  }}
\`;`
  },
  {
    id: 'avatar',
    name: 'Avatar',
    category: 'Display',
    description: 'A circular avatar component for user profiles',
    jsx: `<Avatar src="https://via.placeholder.com/40" alt="User" />`,
    code: `import styled from '@emotion/styled';

const Avatar = styled.img\`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
  transition: all 0.2s ease;

  &:hover {
    border-color: #e2e8f0;
    transform: scale(1.05);
  }
\`;`
  },
  {
    id: 'progress-bar',
    name: 'Progress Bar',
    category: 'Display',
    description: 'A progress indicator with customizable fill',
    jsx: `<ProgressContainer>
  <ProgressBar progress={75} />
  <ProgressText>75% Complete</ProgressText>
</ProgressContainer>`,
    code: `import styled from '@emotion/styled';

const ProgressContainer = styled.div\`
  width: 100%;
  max-width: 300px;
\`;

const ProgressBar = styled.div\`
  width: 100%;
  height: 8px;
  background: #f1f5f9;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: \${props => props.progress || 0}%;
    background: #10b981;
    border-radius: 4px;
    transition: width 0.3s ease;
  }
\`;

const ProgressText = styled.div\`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #64748b;
  text-align: center;
\`;`
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'Display',
    description: 'A hover tooltip component',
    jsx: `<TooltipContainer>
  <TooltipTrigger>Hover me</TooltipTrigger>
  <TooltipContent>This is a tooltip!</TooltipContent>
</TooltipContainer>`,
    code: `import styled from '@emotion/styled';

const TooltipContainer = styled.div\`
  position: relative;
  display: inline-block;
\`;

const TooltipTrigger = styled.div\`
  cursor: pointer;
  padding: 8px 12px;
  background: #f1f5f9;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1e293b;

  &:hover + div {
    opacity: 1;
    visibility: visible;
  }
\`;

const TooltipContent = styled.div\`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #1e293b;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  margin-bottom: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: #1e293b;
  }
\`;`
  },
  {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    category: 'Navigation',
    description: 'A breadcrumb navigation component',
    jsx: `<BreadcrumbContainer>
  <BreadcrumbItem>Home</BreadcrumbItem>
  <BreadcrumbSeparator><ChevronRightIcon /></BreadcrumbSeparator>
  <BreadcrumbItem>Products</BreadcrumbItem>
  <BreadcrumbSeparator><ChevronRightIcon /></BreadcrumbSeparator>
  <BreadcrumbItem active>Details</BreadcrumbItem>
</BreadcrumbContainer>`,
    code: `import styled from '@emotion/styled';

const BreadcrumbContainer = styled.nav\`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
\`;

const BreadcrumbItem = styled.span\`
  color: \${props => props.active ? '#1e293b' : '#64748b'};
  font-weight: \${props => props.active ? '600' : '400'};
  cursor: \${props => props.active ? 'default' : 'pointer'};

  &:hover {
    color: \${props => props.active ? '#1e293b' : '#1e293b'};
  }
\`;

const BreadcrumbSeparator = styled.span\`
  color: #94a3b8;
  
  svg {
    width: 16px;
    height: 16px;
  }
\`;`
  },
  {
    id: 'pagination',
    name: 'Pagination',
    category: 'Navigation',
    description: 'A pagination component for navigating pages',
    jsx: `<PaginationContainer>
  <PaginationButton disabled>Previous</PaginationButton>
  <PaginationButton>1</PaginationButton>
  <PaginationButton active>2</PaginationButton>
  <PaginationButton>3</PaginationButton>
  <PaginationButton>Next</PaginationButton>
</PaginationContainer>`,
    code: `import styled from '@emotion/styled';

const PaginationContainer = styled.div\`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
\`;

const PaginationButton = styled.button\`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  background: \${props => props.active ? '#6366f1' : 'white'};
  color: \${props => props.active ? 'white' : '#64748b'};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;

  &:hover {
    background: \${props => props.active ? '#5855eb' : '#f8fafc'};
    border-color: #6366f1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;`
  }
];

export const categories = Array.from(new Set(componentStore.map(comp => comp.category)));