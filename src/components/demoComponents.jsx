// Demo components for the Vikkit UI Components project
// This file contains all the actual component implementations used for previews in the gallery
// Each component is styled using Emotion styled-components and follows the design system

import styled from '@emotion/styled';
import { Check, X, Plus, Search, AlertTriangle, Info, Star, Heart, ShoppingCart, User, Mail, Phone, Calendar, Clock, Download, Upload, Edit, Trash2, Settings, Filter, Grid, List, ChevronDown, ChevronRight } from 'lucide-react';

// Primary Button - Main call-to-action button with dark background
export const PrimaryButton = styled.button`
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
`;

// Secondary Button - Secondary action button with border styling
export const SecondaryButton = styled.button`
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
`;

// Danger Button - Destructive action button with red styling
export const DangerButton = styled.button`
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
`;

// Icon Button - Button with icon and text combination
export const IconButton = styled.button`
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
`;

// Floating Action Button - Circular floating button with shadow
export const FloatingActionButton = styled.button`
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
`;

// Ghost Button - Minimal button with subtle hover effects
export const GhostButton = styled.button`
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
`;

// Modern Input - Styled input field with focus effects
export const ModernInput = styled.input`
  width: 100%;
  max-width: 280px;
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
`;

// Search Input Container - Container for search input with icon
export const SearchInputContainer = styled.div`
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
`;

export const SearchInput = styled.input`
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
`;

// Floating Label Input
export const FloatingLabelContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
`;

export const FloatingLabelInput = styled.input`
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
`;

export const FloatingLabel = styled.label`
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
`;

// Modern Textarea
export const ModernTextarea = styled.textarea`
  width: 100%;
  max-width: 280px;
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
`;

// Select Dropdown
export const SelectDropdown = styled.select`
  width: 100%;
  max-width: 280px;
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
`;

// Feature Card
export const FeatureCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
  transition: all 0.3s ease;
  cursor: pointer;
  max-width: 300px;

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
`;

// Product Card Components
export const ProductCard = styled.div`
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
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const ProductContent = styled.div`
  padding: 16px;
`;

export const ProductTitle = styled.h3`
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #1e293b;
`;

export const ProductPrice = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #10b981;
  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  line-height: 1.4;
`;

// Pricing Card
export const PricingCard = styled.div`
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
`;

export const PricingBadge = styled.div`
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
`;

export const PricingTitle = styled.h3`
  margin: 0 0 8px 0;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #1e293b;
`;

export const PricingPrice = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #1e293b;
  margin-bottom: 4px;
`;

export const PricingPeriod = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 24px;
`;

export const PricingFeatures = styled.ul`
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
`;

// Stats Card Components
export const StatsCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9;
  text-align: center;
  min-width: 160px;
`;

export const StatsValue = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #1e293b;
  margin-bottom: 8px;
`;

export const StatsLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 12px;
`;

export const StatsChange = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.positive ? '#10b981' : '#ef4444'};
  background: ${props => props.positive ? '#f0fdf4' : '#fef2f2'};
  padding: 4px 8px;
  border-radius: 12px;
  display: inline-block;
`;

// Testimonial Card
export const TestimonialCard = styled.div`
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
`;

export const TestimonialText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #1e293b;
  line-height: 1.6;
  margin: 0 0 20px 0;
  font-style: italic;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TestimonialAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const TestimonialInfo = styled.div`
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
`;

// Alert Components
export const SuccessAlert = styled.div`
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
  max-width: 350px;

  svg {
    width: 20px;
    height: 20px;
    color: #10b981;
  }
`;

export const ErrorAlert = styled.div`
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
  max-width: 350px;

  svg {
    width: 20px;
    height: 20px;
    color: #ef4444;
  }
`;

export const WarningAlert = styled.div`
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
  max-width: 350px;

  svg {
    width: 20px;
    height: 20px;
    color: #f59e0b;
  }
`;

export const InfoAlert = styled.div`
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
  max-width: 350px;

  svg {
    width: 20px;
    height: 20px;
    color: #3b82f6;
  }
`;

// Modal components
export const ModalOverlay = styled.div`
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
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
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
`;

// Confirmation Modal Components
export const ConfirmationModal = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  padding: 24px 24px 0;
  
  h2 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #1e293b;
  }
`;

export const ModalBody = styled.div`
  padding: 16px 24px;
  
  p {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
  }
`;

export const ModalFooter = styled.div`
  padding: 16px 24px 24px;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
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
`;

export const ConfirmButton = styled.button`
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
`;

// Badge Component
export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  
  ${props => {
    switch (props.variant) {
      case 'success':
        return `
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        `;
      case 'error':
        return `
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        `;
      case 'warning':
        return `
          background: #fffbeb;
          color: #92400e;
          border: 1px solid #fed7aa;
        `;
      default:
        return `
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #e2e8f0;
        `;
    }
  }}
`;

// Avatar Component
export const Avatar = styled.img`
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
`;

// Progress Bar Components
export const ProgressContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const ProgressBar = styled.div`
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
    width: ${props => props.progress || 0}%;
    background: #10b981;
    border-radius: 4px;
    transition: width 0.3s ease;
  }
`;

export const ProgressText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: #64748b;
  text-align: center;
`;

// Toggle Switch
export const ToggleSwitch = styled.label`
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
    background: ${props => props.checked ? '#10b981' : '#e2e8f0'};
    border-radius: 12px;
    transition: all 0.2s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${props => props.checked ? '26px' : '2px'};
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

// Checkbox Component
export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1e293b;
`;

export const CheckboxInput = styled.input`
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
`;

// Radio Button Component
export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #1e293b;
`;

export const RadioInput = styled.input`
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
`;

// Tooltip Component
export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipTrigger = styled.div`
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
`;

export const TooltipContent = styled.div`
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
`;

// Breadcrumb Component
export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
`;

export const BreadcrumbItem = styled.span`
  color: ${props => props.active ? '#1e293b' : '#64748b'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: ${props => props.active ? 'default' : 'pointer'};

  &:hover {
    color: ${props => props.active ? '#1e293b' : '#1e293b'};
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: #94a3b8;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

// Pagination Component
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
`;

export const PaginationButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #e2e8f0;
  background: ${props => props.active ? '#6366f1' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;

  &:hover {
    background: ${props => props.active ? '#5855eb' : '#f8fafc'};
    border-color: #6366f1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Component map for rendering
export const componentMap = {
  'primary-button': () => <PrimaryButton>Click me</PrimaryButton>,
  'secondary-button': () => <SecondaryButton>Secondary</SecondaryButton>,
  'danger-button': () => <DangerButton>Delete</DangerButton>,
  'icon-button': () => (
    <IconButton>
      <Plus size={16} />
      Add Item
    </IconButton>
  ),
  'floating-action-button': () => (
    <FloatingActionButton>
      <Plus size={24} />
    </FloatingActionButton>
  ),
  'ghost-button': () => <GhostButton>Ghost Button</GhostButton>,
  'modern-input': () => <ModernInput placeholder="Enter your email" />,
  'search-input': () => (
    <SearchInputContainer>
      <Search size={16} />
      <SearchInput placeholder="Search..." />
    </SearchInputContainer>
  ),
  'floating-label-input': () => (
    <FloatingLabelContainer>
      <FloatingLabelInput placeholder=" " />
      <FloatingLabel>Email Address</FloatingLabel>
    </FloatingLabelContainer>
  ),
  'textarea': () => <ModernTextarea placeholder="Enter your message..." />,
  'select-dropdown': () => (
    <SelectDropdown>
      <option>Choose an option</option>
      <option>Option 1</option>
      <option>Option 2</option>
    </SelectDropdown>
  ),
  'checkbox': () => (
    <CheckboxContainer>
      <CheckboxInput type="checkbox" defaultChecked />
      I agree to the terms
    </CheckboxContainer>
  ),
  'radio-button': () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <RadioContainer>
        <RadioInput type="radio" name="option" defaultChecked />
        Option 1
      </RadioContainer>
      <RadioContainer>
        <RadioInput type="radio" name="option" />
        Option 2
      </RadioContainer>
    </div>
  ),
  'feature-card': () => (
    <FeatureCard>
      <h3>Amazing Feature</h3>
      <p>This is a beautiful card component.</p>
    </FeatureCard>
  ),
  'product-card': () => (
    <ProductCard>
      <ProductImage src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop" alt="Product" />
      <ProductContent>
        <ProductTitle>Product Name</ProductTitle>
        <ProductPrice>$99.99</ProductPrice>
        <ProductDescription>Beautiful product description here.</ProductDescription>
      </ProductContent>
    </ProductCard>
  ),
  'pricing-card': () => (
    <PricingCard>
      <PricingBadge>Popular</PricingBadge>
      <PricingTitle>Pro Plan</PricingTitle>
      <PricingPrice>$29</PricingPrice>
      <PricingPeriod>per month</PricingPeriod>
      <PricingFeatures>
        <li><Check size={16} />Unlimited projects</li>
        <li><Check size={16} />Priority support</li>
        <li><Check size={16} />Advanced analytics</li>
      </PricingFeatures>
      <PrimaryButton style={{ width: '100%' }}>Get Started</PrimaryButton>
    </PricingCard>
  ),
  'stats-card': () => (
    <StatsCard>
      <StatsValue>1,234</StatsValue>
      <StatsLabel>Total Users</StatsLabel>
      <StatsChange positive>+12%</StatsChange>
    </StatsCard>
  ),
  'testimonial-card': () => (
    <TestimonialCard>
      <TestimonialText>
        This product has completely transformed how we work. The interface is intuitive and the features are exactly what we needed.
      </TestimonialText>
      <TestimonialAuthor>
        <TestimonialAvatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop" alt="Sarah Johnson" />
        <TestimonialInfo>
          <h4>Sarah Johnson</h4>
          <p>Product Manager at TechCorp</p>
        </TestimonialInfo>
      </TestimonialAuthor>
    </TestimonialCard>
  ),
  'success-alert': () => (
    <SuccessAlert>
      <Check size={20} />
      Operation completed successfully!
    </SuccessAlert>
  ),
  'error-alert': () => (
    <ErrorAlert>
      <X size={20} />
      Something went wrong. Please try again.
    </ErrorAlert>
  ),
  'warning-alert': () => (
    <WarningAlert>
      <AlertTriangle size={20} />
      Please review your information before proceeding.
    </WarningAlert>
  ),
  'info-alert': () => (
    <InfoAlert>
      <Info size={20} />
      Here's some helpful information for you.
    </InfoAlert>
  ),
  'modal-overlay': () => (
    <div style={{ position: 'relative', width: '100%', height: '200px', background: '#f8fafc', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        background: 'white',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        width: 'calc(100% - 40px)',
        maxWidth: '280px'
      }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: '600' }}>Modal Title</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>Modal content goes here.</p>
      </div>
    </div>
  ),
  'confirmation-modal': () => (
    <div style={{ position: 'relative', width: '100%', height: '200px', background: '#f8fafc', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ConfirmationModal>
        <ModalHeader>
          <h2>Confirm Action</h2>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this item?</p>
        </ModalBody>
        <ModalFooter>
          <CancelButton>Cancel</CancelButton>
          <ConfirmButton>Delete</ConfirmButton>
        </ModalFooter>
      </ConfirmationModal>
    </div>
  ),
  'badge': () => <Badge variant="success">Active</Badge>,
  'avatar': () => <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" alt="User" />,
  'progress-bar': () => (
    <ProgressContainer>
      <ProgressBar progress={75} />
      <ProgressText>75% Complete</ProgressText>
    </ProgressContainer>
  ),
  'toggle-switch': () => <ToggleSwitch checked={true} />,
  'tooltip': () => (
    <TooltipContainer>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipContent>This is a tooltip!</TooltipContent>
    </TooltipContainer>
  ),
  'breadcrumb': () => (
    <BreadcrumbContainer>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbSeparator><ChevronRight size={16} /></BreadcrumbSeparator>
      <BreadcrumbItem>Products</BreadcrumbItem>
      <BreadcrumbSeparator><ChevronRight size={16} /></BreadcrumbSeparator>
      <BreadcrumbItem active>Details</BreadcrumbItem>
    </BreadcrumbContainer>
  ),
  'pagination': () => (
    <PaginationContainer>
      <PaginationButton disabled>Previous</PaginationButton>
      <PaginationButton>1</PaginationButton>
      <PaginationButton active>2</PaginationButton>
      <PaginationButton>3</PaginationButton>
      <PaginationButton>Next</PaginationButton>
    </PaginationContainer>
  )
};