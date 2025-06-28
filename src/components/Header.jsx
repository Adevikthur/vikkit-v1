// Header component for the Vikkit UI Components project
// Displays the application branding and navigation elements

import React from 'react';
import styled from '@emotion/styled';
import { Package } from 'lucide-react';

// Styled component for the main header container
// Provides consistent spacing and border styling with theme-aware colors
const HeaderContainer = styled.header`
  border-bottom: 1px solid #f1f5f9; /* Light border to separate header from content */
  padding: 20px 0; /* Vertical padding for header height */
  margin-bottom: 40px; /* Space between header and main content */
  background: #ffffff; /* Light mode background */
  transition: all 0.3s ease; /* Smooth transitions for theme switching */
  
  /* Dark mode styling */
  .dark & {
    background:rgb(21, 23, 28); /* Grey background for dark mode instead of pure white */
    border-bottom-color:rgb(52, 59, 68); /* Darker border for dark mode */
  }
`;

// Styled component for header content wrapper
// Centers content and provides responsive padding
const HeaderContent = styled.div`
  max-width: 1200px; /* Maximum width for large screens */
  margin: 0 auto; /* Center the content horizontally */
  padding: 0 20px; /* Horizontal padding for mobile responsiveness */
  display: flex; /* Flexbox layout for header elements */
  align-items: center; /* Vertically center all elements */
  gap: 16px; /* Space between header elements */
`;

// Styled component for the logo section
// Groups the icon and text together
const Logo = styled.div`
  display: flex; /* Flexbox layout for logo elements */
  align-items: center; /* Vertically center icon and text */
  gap: 12px; /* Space between icon and text */
`;

// Styled component for the logo icon container
// Provides consistent sizing and styling for the package icon with theme-aware colors
const LogoIcon = styled.div`
  width: 40px; /* Fixed width for consistent sizing */
  height: 40px; /* Fixed height for consistent sizing */
  border-radius: 8px; /* Rounded corners for modern look */
  display: flex; /* Flexbox for centering the icon */
  align-items: center; /* Vertically center the icon */
  justify-content: center; /* Horizontally center the icon */
  background: #000000; /* Dark background for light mode */
  color: #ffffff; /* White icon for light mode */
  transition: all 0.3s ease; /* Smooth transitions for theme switching */
  
  /* Dark mode styling */
  .dark & {
    background: #ffffff; /* White background for dark mode */
    color: #000000; /* Black icon for dark mode */
  }
`;

// Styled component for the main logo text
// Displays the "VikKit" brand name with theme-aware colors
const LogoText = styled.h1`
  margin: 0; /* Remove default margins */
  font-family: 'Inter', sans-serif; /* Consistent font family */
  font-weight: 700; /* Bold weight for brand emphasis */
  font-size: 24px; /* Large size for brand visibility */
  color: #111827; /* Dark text for light mode */
  transition: color 0.3s ease; /* Smooth color transitions */
  
  /* Dark mode styling */
  .dark & {
    color: #ffffff; /* White text for dark mode */
  }
`;

// Styled component for the subtitle text
// Displays descriptive text about the component library with theme-aware colors
const Subtitle = styled.p`
  margin: 0; /* Remove default margins */
  font-family: 'Inter', sans-serif; /* Consistent font family */
  font-size: 14px; /* Smaller size for subtitle */
  margin-left: auto; /* Push subtitle to the right side */
  color: #6b7280; /* Medium grey text for light mode */
  transition: color 0.3s ease; /* Smooth color transitions */

  /* Hide subtitle on mobile devices for better responsive design */
  @media (max-width: 768px) {
    display: none;
  }
  
  /* Dark mode styling */
  .dark & {
    color: #d1d5db; /* Light grey text for dark mode */
  }
`;

// Main Header component
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Logo section with icon and brand name */}
        <Logo>
          {/* Logo icon with theme-aware colors */}
          <LogoIcon>
            <Package size={20} />
          </LogoIcon>
          {/* Brand name with theme-aware text color */}
          <LogoText>VikKit</LogoText>
        </Logo>
        
        {/* Subtitle text with theme-aware colors */}
        <Subtitle>
          Emotion-powered UI components ready to copy & paste
        </Subtitle>
      </HeaderContent>
    </HeaderContainer>
  );
};